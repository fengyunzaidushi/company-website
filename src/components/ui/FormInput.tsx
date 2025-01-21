import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface FormInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    required?: boolean
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({ className, label, error, required, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                        {label}
                        {required && <span className="ml-1 text-red-500">*</span>}
                    </label>
                )}
                <input
                    className={cn(
                        'block w-full rounded-md border border-gray-200 px-4 py-2 text-gray-900',
                        'focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
                        error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        )
    }
)

FormInput.displayName = 'FormInput' 