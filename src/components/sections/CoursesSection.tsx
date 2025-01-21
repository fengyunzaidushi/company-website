import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

const courses = [
    {
        id: 1,
        title: '零基础入门课',
        description: '适合首次接触滑雪的学员，掌握基本技能和安全知识',
        image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766',
        duration: '1天',
        price: '¥688',
        type: 'beginner' as const,
    },
    {
        id: 2,
        title: '进阶提高课',
        description: '适合已掌握基础的学员，提升技术水平',
        image: 'https://images.unsplash.com/photo-1565992441121-4367c2967103',
        duration: '2天',
        price: '¥1288',
        type: 'advanced' as const,
    },
]

export function CoursesSection() {
    return (
        <Container className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                精品课程
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="overflow-hidden rounded-lg bg-white shadow"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                className="object-cover"
                                src={course.image}
                                alt={course.title}
                                fill
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {course.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{course.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">课程时长: {course.duration}</span>
                                <span className="text-lg font-medium text-blue-600">{course.price}</span>
                            </div>
                            <div className="mt-6">
                                <Link href={`/booking?course=${course.type}`}>
                                    <Button variant="outline" className="w-full">
                                        预约课程
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    )
} 