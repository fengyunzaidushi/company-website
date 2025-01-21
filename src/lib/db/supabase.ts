import { createClient } from "@supabase/supabase-js";

if (
  !process.env.NEXT_PUBLIC_SUPABASE_URL ||
  !process.env.SUPABASE_SERVICE_ROLE_KEY
) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  {
    auth: {
      persistSession: false,
    },
    db: {
      schema: "public",
    },
  }
);

// 测试数据库连接
export async function testConnection() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("count")
      .limit(1);

    if (error) {
      console.error("Database connection error:", error);
      return false;
    }
    return true;
  } catch (error) {
    console.error("Connection test failed:", error);
    return false;
  }
}
