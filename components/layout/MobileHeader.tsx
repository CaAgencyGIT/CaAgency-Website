'use client'

import { Ref } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { localizeHref } from '@/lib/i18n/client-paths'

interface MobileHeaderProps {
  onMenuClick: () => void
  locale: string
  label: string
  menuOpen?: boolean
  buttonRef?: Ref<HTMLButtonElement>
}

export default function MobileHeader({ locale, label, onMenuClick, menuOpen = false, buttonRef }: MobileHeaderProps) {
  return (
    <header
      data-site-header
      data-elevated="false"
      className="sticky top-0 z-50 border-b border-transparent bg-background-base text-foreground-primary shadow-none transition-[box-shadow,border-color] duration-300 data-[elevated=true]:border-black/10 data-[elevated=true]:shadow-e2 lg:hidden"
    >
      <div className="px-[10px] md:px-section-x">
        <div className="flex items-center justify-between h-[58px] min-h-[58px]">
          {/* Logo */}
          <Link href={localizeHref('/', locale)} prefetch={false} className="shrink-0">
            <Image
              src="/images/site/logo-full.png"
              alt="CA Agency"
              width={800}
              height={532}
              className="h-[49px] w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Hamburger Menu - 44px minimum touch target for accessibility */}
          <button
            ref={buttonRef}
            onClick={onMenuClick}
            className="min-w-[44px] min-h-[44px] w-[44px] h-[44px] flex items-center justify-center text-foreground-primary"
            aria-label={label}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="dialog"
          >
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 8H28M5 16.5H28M5 25H28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
