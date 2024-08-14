interface IHttpconfig {
    PORT: number
}
export const HTTP_CONFIG: IHttpconfig = {
    PORT: process.env.PORT as any as number
} 