import { NextResponse } from "next/server";
import { supabase } from "@/lib/db/supabase";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "请输入姓名").max(255, "姓名过长"),
  phone: z.string().regex(/^1[3-9]\d{9}$/, "请输入正确的手机号"),
  course: z.enum(["beginner", "advanced"], {
    required_error: "请选择课程",
    invalid_type_error: "课程类型无效",
  }),
  date: z
    .string()
    .min(1, "请选择日期")
    .transform((val) => new Date(val).toISOString().split("T")[0]),
  note: z.string().nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    console.log("Received booking data:", json);

    const body = bookingSchema.parse(json);
    console.log("Validated booking data:", body);

    let retries = 3;
    let lastError;

    while (retries > 0) {
      try {
        const { data, error } = await supabase
          .from("bookings")
          .insert([
            {
              ...body,
              status: "pending",
              created_at: new Date().toISOString(),
            },
          ])
          .select()
          .single();

        if (error) {
          throw error;
        }

        return NextResponse.json(data);
      } catch (error) {
        console.error(`Attempt ${4 - retries} failed:`, error);
        lastError = error;
        retries--;
        if (retries > 0) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }

    console.error("All retry attempts failed:", lastError);
    return NextResponse.json(
      { error: "数据库操作失败，请稍后重试" },
      { status: 500 }
    );
  } catch (error) {
    console.error("Booking error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "数据验证失败", details: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "预约失败，请稍后重试" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json([]);
    }

    // 先设置查询参数
    await supabase.rpc("set_request_phone", { phone_number: phone });

    let query = supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false })
      .eq("phone", phone);

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      throw error;
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Fetch bookings error:", error);
    return NextResponse.json({ error: "获取预约记录失败" }, { status: 500 });
  }
}
