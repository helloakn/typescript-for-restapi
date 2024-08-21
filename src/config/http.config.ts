export const HTTP_CONFIG = {
    PORT: process.env.PORT as any as number,
    JWT_KEY: process.env.JWT_KEY as any as string,
} as const;
