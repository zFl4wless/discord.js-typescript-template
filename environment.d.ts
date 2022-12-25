declare global {
    namespace NodeJS {
        interface ProcessEnv {
            botToken: string;
            guildId: string;
            environment: 'dev' | 'prod' | 'test';
        }
    }
}

export {};
