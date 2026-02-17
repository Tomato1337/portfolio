import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const CACHE_FILE = join(process.cwd(), '.cache', 'wakatime.json')
const CACHE_TTL_MS = 24 * 60 * 60 * 1000

type WakatimeApiLanguage = {
    name?: string
    percent?: number
    hours?: number
    minutes?: number
    text?: string
}

type WakatimeApiResponse = {
    data?: {
        human_readable_total?: string
        human_readable_total_including_other_language?: string
        languages?: WakatimeApiLanguage[]
    }
}

export type WakatimeLanguage = {
    name: string
    percent: number
    hours: string
}

export type WakatimeStats = {
    totalHours: string
    languages: WakatimeLanguage[]
}

type CachedPayload = {
    cachedAt: number
    stats: WakatimeStats
}

const FALLBACK_STATS: WakatimeStats = {
    totalHours: '1,217 hrs 30 mins',
    languages: [
        { name: 'TypeScript', percent: 50.56, hours: '619 hrs 49 mins' },
        { name: 'JavaScript', percent: 18.64, hours: '228 hrs 28 mins' },
        { name: 'Python', percent: 11.78, hours: '144 hrs 25 mins' },
        { name: 'SCSS', percent: 2.87, hours: '35 hrs 7 mins' },
        { name: 'Java', percent: 2.56, hours: '31 hrs 22 mins' },
    ],
}

const readCache = async (): Promise<CachedPayload | null> => {
    try {
        const content = await readFile(CACHE_FILE, 'utf-8')
        const payload = JSON.parse(content) as CachedPayload

        if (!payload?.stats || typeof payload.cachedAt !== 'number') {
            return null
        }

        return payload
    } catch {
        return null
    }
}

const writeCache = async (stats: WakatimeStats) => {
    await mkdir(dirname(CACHE_FILE), { recursive: true })
    const payload: CachedPayload = {
        cachedAt: Date.now(),
        stats,
    }
    await writeFile(CACHE_FILE, JSON.stringify(payload), 'utf-8')
}

const formatHours = (hours?: number, minutes?: number, text?: string) => {
    if (text && text.trim().length > 0) return text

    const safeHours = typeof hours === 'number' ? hours : 0
    const safeMinutes = typeof minutes === 'number' ? minutes : 0
    return `${safeHours} hrs ${safeMinutes} mins`
}

const normalizeStats = (
    response: WakatimeApiResponse,
): WakatimeStats | null => {
    if (!response.data) return null

    const rawLanguages = response.data.languages ?? []
    const languages = rawLanguages
        .filter((item) => item.name)
        .slice(0, 5)
        .map((item) => ({
            name: item.name as string,
            percent: Number(item.percent ?? 0),
            hours: formatHours(item.hours, item.minutes, item.text),
        }))

    if (!languages.length) return null

    return {
        totalHours:
            response.data.human_readable_total_including_other_language ??
            response.data.human_readable_total ??
            FALLBACK_STATS.totalHours,
        languages,
    }
}

const fetchFromApi = async (): Promise<WakatimeStats | null> => {
    const apiKey = process.env.WAKATIME_API_KEY
    if (!apiKey) return null

    const token = Buffer.from(apiKey).toString('base64')
    const response = await fetch(
        'https://wakatime.com/api/v1/users/current/stats/all_time',
        {
            headers: {
                Authorization: `Basic ${token}`,
            },
        },
    )

    if (!response.ok) {
        return null
    }

    const data = (await response.json()) as WakatimeApiResponse
    return normalizeStats(data)
}

export const fetchWakatimeStats = async (): Promise<WakatimeStats> => {
    const cached = await readCache()

    if (cached && Date.now() - cached.cachedAt < CACHE_TTL_MS) {
        return cached.stats
    }

    try {
        const freshStats = await fetchFromApi()
        if (freshStats) {
            await writeCache(freshStats)
            return freshStats
        }
    } catch {
        // noop
    }

    if (cached) {
        return cached.stats
    }

    try {
        await writeCache(FALLBACK_STATS)
    } catch {
        // noop
    }

    return FALLBACK_STATS
}
