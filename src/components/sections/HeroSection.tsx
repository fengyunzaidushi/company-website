import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function HeroSection() {
    return (
        <div className="relative bg-gray-900">
            {/* 背景图片 */}
            <div className="absolute inset-0">
                <Image
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256"
                    alt="滑雪背景"
                    fill
                    priority
                />
                <div className="absolute inset-0 bg-gray-900/70" />
            </div>

            <Container className="relative">
                <div className="py-24 sm:py-32">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        专业滑雪培训
                    </h1>
                    <p className="mt-6 text-xl text-gray-300">
                        从零基础到专业水平，我们提供专业的滑雪培训课程，让您享受滑雪的乐趣。
                    </p>
                    <div className="mt-10">
                        <Link href="/booking">
                            <Button size="lg">
                                立即预约
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
} 