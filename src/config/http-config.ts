interface IHttpconfig {
    PORT: number,
    JWT_KEY: string,
    [key: string]: string | number
}
export const HTTP_CONFIG: IHttpconfig = {
    PORT: process.env.PORT as any as number,
    JWT_KEY: process.env.JWT_KEY as any as string,
} 