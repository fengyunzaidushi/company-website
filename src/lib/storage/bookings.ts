export interface Booking {
  id: string;
  name: string;
  phone: string;
  course: "beginner" | "advanced";
  date: string;
  note?: string;
  createdAt: string;
  status: "pending" | "confirmed" | "cancelled";
}

class BookingStorage {
  private readonly STORAGE_KEY = "ski_bookings";

  // 获取所有预约
  getAll(): Booking[] {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // 添加新预约
  add(booking: Omit<Booking, "id" | "createdAt" | "status">): Booking {
    const bookings = this.getAll();
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    bookings.push(newBooking);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  }

  // 更新预约状态
  updateStatus(id: string, status: Booking["status"]): Booking | null {
    const bookings = this.getAll();
    const index = bookings.findIndex((b) => b.id === id);
    if (index === -1) return null;

    bookings[index].status = status;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
    return bookings[index];
  }

  // 获取指定预约
  get(id: string): Booking | null {
    const bookings = this.getAll();
    return bookings.find((b) => b.id === id) || null;
  }

  // 按手机号查询预约
  getByPhone(phone: string): Booking[] {
    const bookings = this.getAll();
    return bookings.filter((b) => b.phone === phone);
  }
}

export const bookingStorage = new BookingStorage();
