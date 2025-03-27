import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn('border border-gray-300 dark:border-gray-700 p-4 rounded-lg shadow-sm', className)}>
            {children}
        </div>
    )
}
