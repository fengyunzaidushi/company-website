import Image from 'next/image'
import { Container } from '@/components/ui/Container'

const instructors = [
    {
        id: 1,
        name: '王教练',
        title: '高级滑雪教练',
        image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
        description: '从事滑雪教学15年，国家级滑雪教练认证',
    },
    {
        id: 2,
        name: '李教练',
        title: '青少年滑雪教练',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        description: '专注青少年滑雪培训，具有丰富的教学经验',
    },
    {
        id: 3,
        name: '张教练',
        title: '初级滑雪教练',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        description: '耐心细致，善于教授零基础学员',
    },
]

export function InstructorsSection() {
    return (
        <Container className="py-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                专业教练团队
            </h2>
            <p className="mt-6 text-lg text-gray-600">
                我们的教练团队均具备专业资质和丰富教学经验
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {instructors.map((instructor) => (
                    <div
                        key={instructor.id}
                        className="text-center"
                    >
                        <div className="relative mx-auto h-40 w-40 overflow-hidden rounded-full">
                            <Image
                                className="object-cover"
                                src={instructor.image}
                                alt={instructor.name}
                                fill
                            />
                        </div>
                        <h3 className="mt-6 text-xl font-semibold text-gray-900">
                            {instructor.name}
                        </h3>
                        <p className="text-blue-600">{instructor.title}</p>
                        <p className="mt-2 text-gray-600">{instructor.description}</p>
                    </div>
                ))}
            </div>
        </Container>
    )
} 