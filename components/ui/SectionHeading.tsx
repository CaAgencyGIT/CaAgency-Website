import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import Heading from './Heading'
import HeadingAccent from './HeadingAccent'
import Text from './Text'

interface SectionHeadingProps {
  title: ReactNode
  /** Short uppercase kicker rendered above the title, e.g. "What We Do" */
  eyebrow?: string
  /** Optional supporting line rendered under the accent rule */
  description?: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  size?: 'lg' | 'md'
  align?: 'center' | 'start'
  /** Render the small accent rule under the title */
  accent?: boolean
  className?: string
}

/**
 * Standard section header: eyebrow label, display title, accent rule, and an
 * optional description. Centralizes the title scale so sections stop drifting
 * between hand-rolled sizes.
 */
export default function SectionHeading({
  title,
  eyebrow,
  description,
  as = 'h2',
  size = 'lg',
  align = 'center',
  accent = false,
  className,
}: SectionHeadingProps) {
  const centered = align === 'center'
  const sizeClasses = {
    lg: 'text-[length:var(--fs-h2)]',
    md: 'text-[length:var(--fs-h2-md)]',
  }

  return (
    <div className={cn(centered ? 'text-center' : 'text-start', className)}>
      {eyebrow && (
        <span className="mb-3 block font-jost text-[13px] font-medium uppercase tracking-[0.2em] text-accent-red">
          {eyebrow}
        </span>
      )}
      <Heading as={as} color="dark" className={cn(sizeClasses[size], description || accent ? 'mb-5' : 'mb-0')}>
        {title}
      </Heading>
      {accent && <HeadingAccent align={centered ? 'center' : 'start'} className={description ? 'mb-6' : 'mb-0'} />}
      {description && (
        <Text color="dark" size="sm" className={cn('max-w-[640px] !text-[#555]', centered && 'mx-auto')}>
          {description}
        </Text>
      )}
    </div>
  )
}
