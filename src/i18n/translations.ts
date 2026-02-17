export const supportedLocales = ['en', 'ru'] as const

export type Locale = (typeof supportedLocales)[number]

type ProjectItem = {
    title: string
    link?: string
    description: string
    tags: string[]
    category: 'frontend' | 'fullstack' | 'backend'
    height?: 'md' | 'lg'
    imageKey?: 'memology' | 'aviagrant' | 'hrhub' | 'shopix' | 'medidash'
}

type ProjectFilter = {
    key: 'all' | 'frontend' | 'fullstack' | 'backend'
    label: string
}

type TranslationSchema = {
    meta: {
        title: string
        description: string
    }
    nav: {
        home: string
        about: string
        projects: string
        contact: string
        navigation: string
        openMenu: string
        toggleTheme: string
        themeLight: string
        themeDark: string
    }
    hero: {
        status: string
        hello: string
        name: string
        roleTop: string
        roleBottom: string
        description: string
        viewWork: string
        getInTouch: string
    }
    about: {
        headingPrefix: string
        headingAccent: string
        description: string
        wakatimeLoading: string
    }
    projects: {
        headingTop: string
        headingBottom: string
        info: string
        filters: ProjectFilter[]
        items: ProjectItem[]
    }
    contact: {
        heading: string
        description: string
        openGithub: string
    }
    wakatime: {
        totalTime: string
    }
}

export const translations: Record<Locale, TranslationSchema> = {
    en: {
        meta: {
            title: 'Ilya — Frontend Developer',
            description:
                'Frontend developer portfolio with selected works, stack, and contact details.',
        },
        nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            navigation: 'Navigation',
            openMenu: 'Open menu',
            toggleTheme: 'Toggle theme',
            themeLight: 'Switch to light theme',
            themeDark: 'Switch to dark theme',
        },
        hero: {
            status: 'Available for work',
            hello: "Hello, I'm",
            name: 'Ilya',
            roleTop: 'FRONTEND',
            roleBottom: 'DEVELOPER',
            description:
                'Crafting digital experiences with a blend of technical expertise and creative flair. Known on the web as @Tomato1337. I turn complex problems into elegant, user-friendly interfaces.',
            viewWork: 'View My Work',
            getInTouch: 'Get in Touch',
        },
        about: {
            headingPrefix: 'Building products with',
            headingAccent: 'clarity and speed',
            description:
                'I design and deliver frontend systems from UI architecture to backend APIs, with focus on clean DX, performance, and maintainable codebases.',
            wakatimeLoading: 'Loading Wakatime stats...',
        },
        projects: {
            headingTop: 'SELECTED',
            headingBottom: 'PROJECTS',
            info: 'Curated experiments, interfaces and production systems built with modern frontend and backend stack.',
            filters: [
                { key: 'all', label: 'cat.all()' },
                { key: 'frontend', label: '.frontend' },
                { key: 'fullstack', label: '.fullstack' },
                { key: 'backend', label: '.backend' },
            ],
            items: [
                {
                    title: 'Medidash',
                    link: 'https://github.com/Tomato1337/medidash',
                    description:
                        'Local-first system for storing and AI-powered analysis of medical documents.',
                    tags: [
                        'ai',
                        'frontend',
                        'backend',
                        'react',
                        'nestjs',
                        'postgres',
                        'local-first',
                    ],
                    category: 'fullstack',
                    height: 'lg',
                    imageKey: 'medidash',
                },
                {
                    title: 'AI Memes Frontend (Memology)',
                    link: 'https://github.com/Tomato1337/memology-frontend',
                    description:
                        'Frontend for an AI memes platform focused on generation and sharing.',
                    tags: [
                        'frontend',
                        'backend',
                        'nextjs',
                        'react',
                        'ai',
                        'fsd',
                        'tailwind',
                    ],
                    category: 'frontend',
                    imageKey: 'memology',
                },
                {
                    title: 'Aviagrant',
                    link: 'https://github.com/Tomato1337/aviagrant',
                    description:
                        'Service for searching and tracking subsidized airline tickets with Telegram notifications.',
                    tags: [
                        'telegram',
                        'nextjs',
                        'fastify',
                        'mongodb',
                        'redis',
                        'frontend',
                        'backend',
                    ],
                    category: 'fullstack',
                    height: 'lg',
                    imageKey: 'aviagrant',
                },
                {
                    title: 'HR Hub',
                    link: 'https://github.com/MTUCI-Pixel-Team/hr-hub-frontend',
                    description:
                        'Web app that aggregates HR messages from multiple messengers in a single workflow.',
                    tags: ['frontend', 'react', 'fsd', 'zustand', 'tanstack'],
                    category: 'frontend',
                    imageKey: 'hrhub',
                },
                {
                    title: 'Shopix',
                    link: 'https://github.com/MTUCI-Pixel-Team/shopix-frontend',
                    description:
                        'Classified frontend in Avito style with listings, search, and user account features.',
                    tags: ['frontend', 'react', 'fsd', 'tanstack', 'docker'],
                    category: 'frontend',
                    imageKey: 'shopix',
                },
                {
                    title: 'StoryCraft',
                    link: 'https://github.com/Tomato1337/story-craft',
                    description:
                        'Collaborative interactive storytelling platform built on microservices architecture.',
                    tags: [
                        'microservices',
                        'fastify',
                        'express',
                        'postgres',
                        'docker',
                        'swagger',
                    ],
                    category: 'backend',
                    height: 'lg',
                },
            ],
        },
        contact: {
            heading: "Let's build your next product",
            description: 'Open for frontend and fullstack opportunities.',
            openGithub: 'Open GitHub',
        },
        wakatime: {
            totalTime: 'Total Time',
        },
    },
    ru: {
        meta: {
            title: 'Илья — Frontend разработчик',
            description:
                'Портфолио frontend-разработчика с избранными проектами, стеком и контактами.',
        },
        nav: {
            home: 'Главная',
            about: 'Обо мне',
            projects: 'Проекты',
            contact: 'Контакты',
            navigation: 'Навигация',
            openMenu: 'Открыть меню',
            toggleTheme: 'Переключить тему',
            themeLight: 'Включить светлую тему',
            themeDark: 'Включить тёмную тему',
        },
        hero: {
            status: 'Открыт к предложениям',
            hello: 'Привет, я',
            name: 'Илья',
            roleTop: 'FRONTEND',
            roleBottom: 'DEVELOPER',
            description:
                'Создаю цифровые продукты, сочетая техническую экспертизу и креативный подход. В сети известен как @Tomato1337. Превращаю сложные задачи в элегантные и удобные интерфейсы.',
            viewWork: 'Смотреть проекты',
            getInTouch: 'Связаться',
        },
        about: {
            headingPrefix: 'Создаю продукты с',
            headingAccent: 'ясностью и скоростью',
            description:
                'Проектирую и реализую frontend-системы: от UI-архитектуры до backend API, с фокусом на чистый DX, производительность и поддерживаемый код.',
            wakatimeLoading: 'Загружаю статистику Wakatime...',
        },
        projects: {
            headingTop: 'ИЗБРАННЫЕ',
            headingBottom: 'ПРОЕКТЫ',
            info: 'Подборка экспериментов, интерфейсов и production-систем, созданных на современном frontend и backend стеке.',
            filters: [
                { key: 'all', label: 'cat.all()' },
                { key: 'frontend', label: '.frontend' },
                { key: 'fullstack', label: '.fullstack' },
                { key: 'backend', label: '.backend' },
            ],
            items: [
                {
                    title: 'Medidash',
                    link: 'https://github.com/Tomato1337/medidash',
                    description:
                        'Локальная система для хранения и AI-анализа медицинских документов.',
                    tags: [
                        'ai',
                        'frontend',
                        'backend',
                        'react',
                        'nestjs',
                        'postgres',
                        'local-first',
                    ],
                    category: 'fullstack',
                    height: 'lg',
                },
                {
                    title: 'AI Memes Frontend (Memology)',
                    link: 'https://github.com/Tomato1337/memology-frontend',
                    description:
                        'Фронтенд платформы генерации и обмена мемами с ИИ.',
                    tags: [
                        'frontend',
                        'backend',
                        'nextjs',
                        'react',
                        'ai',
                        'fsd',
                        'tailwind',
                    ],
                    category: 'frontend',
                    imageKey: 'memology',
                },
                {
                    title: 'Aviagrant',
                    link: 'https://github.com/Tomato1337/aviagrant',
                    description:
                        'Сервис поиска и отслеживания субсидированных авиабилетов с Telegram-уведомлениями.',
                    tags: [
                        'telegram',
                        'nextjs',
                        'fastify',
                        'mongodb',
                        'redis',
                        'frontend',
                        'backend',
                    ],
                    category: 'fullstack',
                    height: 'lg',
                    imageKey: 'aviagrant',
                },
                {
                    title: 'HR Hub',
                    link: 'https://github.com/MTUCI-Pixel-Team/hr-hub-frontend',
                    description:
                        'Веб-приложение для агрегирования сообщений HR из разных мессенджеров.',
                    tags: ['frontend', 'react', 'fsd', 'zustand', 'tanstack'],
                    category: 'frontend',
                    imageKey: 'hrhub',
                },
                {
                    title: 'Shopix',
                    link: 'https://github.com/MTUCI-Pixel-Team/shopix-frontend',
                    description:
                        'Фронтенд классифайда в стиле Avito: объявления, поиск и личный кабинет.',
                    tags: ['frontend', 'react', 'fsd', 'tanstack', 'docker'],
                    category: 'frontend',
                    imageKey: 'shopix',
                },
                {
                    title: 'StoryCraft',
                    link: 'https://github.com/Tomato1337/story-craft',
                    description:
                        'Платформа совместного интерактивного сторителлинга на микросервисах.',
                    tags: [
                        'microservices',
                        'fastify',
                        'express',
                        'go',
                        'postgres',
                        'docker',
                        'swagger',
                    ],
                    category: 'backend',
                    height: 'lg',
                },
            ],
        },
        contact: {
            heading: 'Давайте создадим ваш следующий продукт',
            description: 'Открыт к frontend и fullstack-вакансиям.',
            openGithub: 'Открыть GitHub',
        },
        wakatime: {
            totalTime: 'Общее время',
        },
    },
}
