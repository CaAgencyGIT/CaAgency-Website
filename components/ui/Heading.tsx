import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeadingProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  color?: 'white' | 'dark' | 'muted'
}

export default function Heading({
  children,
  as = 'h1',
  className,
  color = 'dark',
}: HeadingProps) {
  const Component = as
  const colorClasses = {
    white: 'text-foreground-white',
    dark: 'text-foreground-dark',
    muted: 'text-foreground-muted',
  }

  const sizeClasses = {
    h1: 'text-[length:var(--fs-h1)] leading-[1.1]',
    h2: 'text-[length:var(--fs-h2)] leading-[1.12]',
    h3: 'text-[30px] tablet:text-[26px] mobile:text-[22px] leading-[1.4]',
    h4: 'text-[23px] mobile:text-[20px] leading-[1.4]',
    h5: 'text-[20px] mobile:text-[18px] leading-[1.4]',
    h6: 'text-[18px] mobile:text-[16px] leading-[1.4]',
  }

  return (
    <Component
      className={cn(
        'font-anegra tracking-[-0.01em] rtl:tracking-normal text-balance',
        sizeClasses[as],
        colorClasses[color],
        className
      )}
    >
      {children}
    </Component>
  )
}
