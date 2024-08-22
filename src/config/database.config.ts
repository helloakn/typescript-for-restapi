export const MONGO_CONFIG = {
  SVR_URL: process.env.MONGO_SVR_URL as any as string,
  DB_NAME: process.env.MONGO_DB_NAME as any as string,
} as const;
