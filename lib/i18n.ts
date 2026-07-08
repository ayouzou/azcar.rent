import translations from '@/data/translations.json'

export type Language = 'en' | 'fr' | 'ar'
export type Currency = 'MAD' | 'EUR' | 'USD'

export const LANGUAGES = {
  en: 'English',
  fr: 'Français',
  ar: 'العربية',
}

export const CURRENCIES = {
  MAD: { symbol: 'د.م.', name: 'Moroccan Dirham', rate: 1 },
  EUR: { symbol: '€', name: 'Euro', rate: 0.095 },
  USD: { symbol: '$', name: 'US Dollar', rate: 0.10 },
}

export const getTrans = (lang: Language) => {
  return translations[lang as keyof typeof translations]
}

export const convertPrice = (price: number, currency: Currency): number => {
  return Math.round(price * CURRENCIES[currency].rate * 100) / 100
}

export const formatPrice = (price: number, currency: Currency): string => {
  const converted = convertPrice(price, currency)
  return `${CURRENCIES[currency].symbol} ${converted.toFixed(2)}`
}

export const getTextDirection = (lang: Language): 'ltr' | 'rtl' => {
  return lang === 'ar' ? 'rtl' : 'ltr'
}
