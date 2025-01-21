import { Container } from '@/components/ui/Container'
import { BookingForm } from '@/components/forms/BookingForm'

export default function BookingPage() {
    return (
        <main className="py-16">
            <Container className="max-w-2xl">
                <div className="rounded-lg bg-white p-8 shadow">
                    <h1 className="text-2xl font-bold text-gray-900">预约课程</h1>
                    <p className="mt-2 text-gray-600">
                        请填写以下信息进行课程预约，我们会尽快与您联系确认。
                    </p>
                    <div className="mt-8">
                        <BookingForm />
                    </div>
                </div>
            </Container>
        </main>
    )
} 