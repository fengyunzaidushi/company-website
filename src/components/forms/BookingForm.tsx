'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { FormInput } from '@/components/ui/FormInput'
import { Button } from '@/components/ui/Button'
import { useSearchParams } from 'next/navigation'
import { bookingStorage } from '@/lib/storage/bookings'

const bookingSchema = z.object({
    name: z.string().min(2, '请输入姓名').max(255, '姓名过长'),
    phone: z.string().regex(/^1[3-9]\d{9}$/, '请输入正确的手机号'),
    course: z.enum(['beginner', 'advanced'], {
        required_error: '请选择课程',
        invalid_type_error: '课程类型无效',
    }),
    date: z.string().min(1, '请选择日期'),
    note: z.string().nullable().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

export function BookingForm() {
    const searchParams = useSearchParams()
    const defaultCourse = searchParams.get('course')

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState('')
    const [submitSuccess, setSubmitSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
        defaultValues: {
            course: defaultCourse as 'beginner' | 'advanced' | undefined,
        },
    })

    const onSubmit = async (data: BookingFormData) => {
        try {
            setIsSubmitting(true)
            setSubmitError('')

            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || '提交失败')
            }

            setSubmitSuccess(true)
            reset()
        } catch (error) {
            console.error('Booking error:', error)
            setSubmitError(error instanceof Error ? error.message : '提交失败，请稍后重试')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormInput
                label="姓名"
                required
                {...register('name')}
                error={errors.name?.message}
            />

            <FormInput
                label="手机号"
                type="tel"
                required
                {...register('phone')}
                error={errors.phone?.message}
            />

            <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                    课程选择
                    <span className="ml-1 text-red-500">*</span>
                </label>
                <select
                    className="block w-full rounded-md border border-gray-200 px-4 py-2"
                    {...register('course')}
                >
                    <option value="">请选择课程</option>
                    <option value="beginner">零基础入门课</option>
                    <option value="advanced">进阶提高课</option>
                </select>
                {errors.course?.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.course.message}</p>
                )}
            </div>

            <FormInput
                label="预约日期"
                type="date"
                required
                {...register('date')}
                error={errors.date?.message}
            />

            <div>
                <label className="mb-2 block text-sm font-medium text-gray-900">
                    备注信息
                    <span className="ml-1 text-gray-400">(选填)</span>
                </label>
                <textarea
                    className="block w-full rounded-md border border-gray-200 px-4 py-2"
                    rows={3}
                    {...register('note')}
                />
            </div>

            {submitError && (
                <div className="rounded-md bg-red-50 p-4">
                    <p className="text-sm text-red-500">{submitError}</p>
                </div>
            )}

            {submitSuccess && (
                <div className="rounded-md bg-green-50 p-4">
                    <p className="text-sm text-green-500">预约提交成功！我们会尽快联系您</p>
                </div>
            )}

            <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? '提交中...' : '提交预约'}
            </Button>
        </form>
    )
} 