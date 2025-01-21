import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function ContactSection() {
    return (
        <div className="bg-gray-50">
            <Container className="py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* 联系信息 */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            联系我们
                        </h2>
                        <p className="mt-6 text-lg text-gray-600">
                            如果您有任何问题，欢迎随时联系我们。我们的客服团队将竭诚为您服务。
                        </p>
                        <dl className="mt-8 space-y-6">
                            <div>
                                <dt className="font-medium text-gray-900">地址</dt>
                                <dd className="mt-2 text-gray-600">
                                    北京市朝阳区滑雪场路88号
                                </dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">电话</dt>
                                <dd className="mt-2 text-gray-600">400-888-8888</dd>
                            </div>
                            <div>
                                <dt className="font-medium text-gray-900">邮箱</dt>
                                <dd className="mt-2 text-gray-600">contact@example.com</dd>
                            </div>
                        </dl>
                    </div>

                    {/* 地图 */}
                    <div className="overflow-hidden rounded-lg bg-gray-200">
                        <div className="h-full min-h-[400px]">
                            {/* 这里可以嵌入地图组件 */}
                            <div className="flex h-full items-center justify-center">
                                地图区域
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
} 