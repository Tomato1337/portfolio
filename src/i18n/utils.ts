import { supportedLocales, translations, type Locale } from './translations'

export const isValidLocale = (value: string): value is Locale =>
    supportedLocales.includes(value as Locale)

export const normalizeLocale = (value?: string): Locale => {
    if (!value) return 'en'
    return isValidLocale(value) ? value : 'en'
}

export const useTranslations = (value?: string) => {
    const locale = normalizeLocale(value)
    return translations[locale]
}
