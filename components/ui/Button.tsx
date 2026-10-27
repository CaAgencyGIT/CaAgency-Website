import NextLink from 'next/link'
import type { ComponentProps, FocusEventHandler, MouseEventHandler, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { localizeHref } from '@/lib/i18n/client-paths'
import type { Locale } from '@/i18n/config'

interface ButtonProps {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'dark' | 'light' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
  size?: 'default' | 'sm' | 'lg'
  disabled?: boolean
  unlocalized?: boolean
  locale?: Locale
  prefetch?: ComponentProps<typeof NextLink>['prefetch']
  target?: ComponentProps<typeof NextLink>['target']
  rel?: string
  onMouseEnter?: MouseEventHandler<HTMLAnchorElement>
  onFocus?: FocusEventHandler<HTMLAnchorElement>
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  type = 'button',
  size = 'default',
  disabled = false,
  unlocalized = false,
  locale = 'en',
  prefetch,
  target,
  rel,
  onMouseEnter,
  onFocus,
}: ButtonProps) {
  const baseStyles =
    'font-jost font-medium rounded-button inline-block text-center transition-[background-color,color,translate,box-shadow,scale] duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] motion-reduce:hover:translate-none motion-reduce:active:scale-100 motion-reduce:transition-colors disabled:pointer-events-none disabled:opacity-60'

  const sizeStyles = {
    sm: 'text-[14px] px-[20px] py-[12px]',
    default: 'text-[16px] px-[28px] py-[14px]',
    lg: 'text-[18px] px-[32px] py-[16px]',
  }

  const variants = {
    primary:
      'bg-button-bg text-button-text shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-black hover:text-button-text hover:shadow-e2',
    dark: 'bg-background-dark text-foreground-white hover:bg-button-hoverDark',
    light: 'bg-background-light text-foreground-dark ring-1 ring-black/10 hover:bg-button-hoverLight',
    // Secondary action on light surfaces: outline pill next to a solid primary
    ghost:
      'bg-transparent text-foreground-primary ring-1 ring-black/20 hover:ring-black/40 hover:bg-black/[0.03]',
  }

  const classes = cn(baseStyles, sizeStyles[size], variants[variant], className)

  if (href) {
    const resolvedHref = unlocalized || href.startsWith('/admin') ? href : localizeHref(href, locale)
    // New-tab links are always hardened against reverse-tabnabbing, whatever
    // rel tokens the caller passed.
    const resolvedRel =
      target === '_blank'
        ? Array.from(new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), 'noopener', 'noreferrer'])).join(' ')
        : rel
    return (
      <NextLink href={resolvedHref} className={classes} prefetch={prefetch} target={target} rel={resolvedRel} onMouseEnter={onMouseEnter} onFocus={onFocus}>
        {children}
      </NextLink>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
