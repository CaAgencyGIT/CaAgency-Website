import { defaultLocale, isRtlLocale, locales, type Locale } from '@/i18n/config'

// Copy for the error boundaries. They can render outside the next-intl
// provider (global-error replaces the root layout), so the strings live here
// as plain data and the locale comes from the URL.
const copy: Record<Locale, { title: string; body: string; retry: string; home: string }> = {
  en: {
    title: 'Something went wrong',
    body: 'We encountered an unexpected error. Please try again or contact us if the problem persists.',
    retry: 'Try again',
    home: 'Back to Home',
  },
  ar: {
    title: 'حدث خطأ ما',
    body: 'واجهنا خطأً غير متوقع. يرجى المحاولة مرة أخرى أو التواصل معنا إذا استمرت المشكلة.',
    retry: 'حاول مرة أخرى',
    home: 'العودة إلى الصفحة الرئيسية',
  },
  ko: {
    title: '문제가 발생했습니다',
    body: '예기치 않은 오류가 발생했습니다. 다시 시도하시고, 문제가 계속되면 저희에게 연락해 주세요.',
    retry: '다시 시도',
    home: '홈으로 돌아가기',
  },
  zh: {
    title: '出现问题',
    body: '发生了意外错误。请重试，如果问题仍然存在，请与我们联系。',
    retry: '重试',
    home: '返回首页',
  },
  fr: {
    title: 'Une erreur est survenue',
    body: 'Une erreur inattendue s’est produite. Veuillez réessayer ou nous contacter si le problème persiste.',
    retry: 'Réessayer',
    home: 'Retour à l’accueil',
  },
  es: {
    title: 'Algo salió mal',
    body: 'Se produjo un error inesperado. Inténtalo de nuevo o contáctanos si el problema continúa.',
    retry: 'Intentar de nuevo',
    home: 'Volver al inicio',
  },
  de: {
    title: 'Etwas ist schiefgelaufen',
    body: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuch es erneut oder kontaktiere uns, falls das Problem bleibt.',
    retry: 'Erneut versuchen',
    home: 'Zur Startseite',
  },
}

export function localeFromPath(pathname: string | null | undefined): Locale {
  const first = pathname?.split('/')[1] ?? ''
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale
}

export function getErrorCopy(locale: Locale) {
  return {
    ...copy[locale],
    dir: isRtlLocale(locale) ? ('rtl' as const) : ('ltr' as const),
    homeHref: locale === defaultLocale ? '/' : `/${locale}`,
  }
}
