import { defineMiddleware } from 'astro:middleware'
import { isValidLocale } from './i18n/utils'

const languageCookieName = 'lang'

const parseAcceptLanguage = (header: string | null): 'ru' | 'en' => {
    if (!header) return 'en'

    const normalized = header.toLowerCase()
    return normalized.includes('ru') ? 'ru' : 'en'
}

export const onRequest = defineMiddleware((context, next) => {
    const { pathname } = context.url

    if (pathname === '/') {
        const preferredFromCookie = context.cookies
            .get(languageCookieName)
            ?.value?.toLowerCase()

        if (preferredFromCookie && isValidLocale(preferredFromCookie)) {
            return context.redirect(`/${preferredFromCookie}/`, 302)
        }

        const preferredFromHeader = parseAcceptLanguage(
            context.request.headers.get('accept-language'),
        )

        return context.redirect(`/${preferredFromHeader}/`, 302)
    }

    return next()
})
