import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-md font-medium transition',
        variant === 'primary' ? 'bg-[#3498db] text-white px-6 py-2' : 'border border-[#1d976c] text-[#1d976c]',
        className
      )}
      {...props}
    />
  )
}
