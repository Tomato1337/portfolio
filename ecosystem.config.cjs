module.exports = {
    apps: [
        {
            name: 'my-portfolio',
            script: './dist/server/entry.mjs',
            interpreter: 'node',
            env: {
                NODE_ENV: 'production',
                HOST: '0.0.0.0',
                PORT: 4321,
                WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
            },
        },
    ],
}
