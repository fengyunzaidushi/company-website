'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { FormInput } from '@/components/ui/FormInput'
import { Button } from '@/components/ui/Button'
import { bookingStorage, Booking } from '@/lib/storage/bookings'

export default function CheckBookingPage() {
    const [phone, setPhone] = useState('')
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const handleSearch = async () => {
        try {
            setIsLoading(true)
            setError('')

            const response = await fetch(`/api/bookings?phone=${phone}`)
            if (!response.ok) {
                throw new Error('获取预约记录失败')
            }

            const data = await response.json()
            setBookings(data)
        } catch (error) {
            setError('查询失败，请稍后重试')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <main className="py-16">
            <Container className="max-w-2xl">
                <div className="rounded-lg bg-white p-8 shadow">
                    <h1 className="text-2xl font-bold text-gray-900">查询预约</h1>
                    <p className="mt-2 text-gray-600">
                        请输入预约时使用的手机号码查询预约状态。
                    </p>

                    <div className="mt-8 space-y-6">
                        <div className="flex gap-4">
                            <FormInput
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="请输入手机号"
                            />
                            <Button onClick={handleSearch}>
                                查询
                            </Button>
                        </div>

                        {isLoading ? (
                            <p className="mt-4 text-gray-600">
                                查询中...
                            </p>
                        ) : error ? (
                            <p className="mt-4 text-red-600">
                                {error}
                            </p>
                        ) : (
                            <div className="mt-8">
                                <h2 className="text-lg font-semibold text-gray-900">
                                    查询结果
                                </h2>
                                {bookings.length === 0 ? (
                                    <p className="mt-4 text-gray-600">
                                        未找到相关预约记录
                                    </p>
                                ) : (
                                    <div className="mt-4 space-y-4">
                                        {bookings.map((booking) => (
                                            <div
                                                key={booking.id}
                                                className="rounded-lg border border-gray-200 p-4"
                                            >
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            {booking.name}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            预约日期: {booking.date}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            课程: {booking.course === 'beginner' ? '零基础入门课' : '进阶提高课'}
                                                        </p>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`inline-block rounded-full px-2 py-1 text-xs ${booking.status === 'confirmed'
                                                            ? 'bg-green-100 text-green-800'
                                                            : booking.status === 'cancelled'
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {{
                                                                pending: '待确认',
                                                                confirmed: '已确认',
                                                                cancelled: '已取消'
                                                            }[booking.status]}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </main>
    )
} 