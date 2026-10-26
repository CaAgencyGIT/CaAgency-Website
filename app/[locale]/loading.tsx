import LogoSpinner from '@/components/ui/LogoSpinner'

// Shown while a page's content streams in after navigation.
export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center text-foreground-primary">
      <LogoSpinner size={88} />
    </div>
  )
}
