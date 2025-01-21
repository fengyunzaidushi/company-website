import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '专业滑雪培训 | 从零基础到专业水平',
  description: '提供专业的滑雪培训课程，包括零基础入门课程和进阶提高课程。我们的教练团队均具备专业资质和丰富教学经验。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
