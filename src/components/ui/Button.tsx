import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    size?: 'sm' | 'md' | 'lg'
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-md font-medium transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                {
                    'bg-blue-600 text-white hover:bg-blue-700': variant === 'primary',
                    'bg-gray-200 text-gray-900 hover:bg-gray-300': variant === 'secondary',
                    'border-2 border-blue-600 text-blue-600 hover:bg-blue-50': variant === 'outline',
                    'px-3 py-1.5 text-sm': size === 'sm',
                    'px-4 py-2 text-base': size === 'md',
                    'px-6 py-3 text-lg': size === 'lg',
                },
                className
            )}
            {...props}
        />
    )
} 