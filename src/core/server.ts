import express, { Router, RequestHandler } from 'express';
import * as bodyparser from 'body-parser';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import type { IRouter } from '@/core/route';

import { HTTP_CONFIG } from '@/config';

import * as routes from '@/app/routes';
import { errorHandler } from '@/app/middlewares';

console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --');
export class Server {
    httpSvr: express.Application;
    private PORT: number = HTTP_CONFIG.PORT;

    constructor() {
        this.httpSvr = express();
    }

    configureRoutes(): Router {
        const extendRouters = express.Router();

        const expandRoutes = <T extends IRouter, Y extends Router>(prefix: string, routes: T[]): Y => {
            routes.forEach((r: T) => {
                if (r.url !== '' && r.url !== undefined) {
                    const url = prefix + r.url as string;
                    r.methods?.forEach(x => {
                        extendRouters[x](url, r.funs as RequestHandler[]);
                    });

                }
                if (r.routes.length > 0) {
                    const prefixUrl = prefix + r.prefix
                    expandRoutes<IRouter, Router>(prefixUrl, r.routes)
                }
            });
            return extendRouters as Y;
        }

        for (const [_, r] of Object.entries(routes)) {
            if (r.url !== '' && r.url !== undefined) {
                let requestHandlers: RequestHandler | RequestHandler[];
                if (Array.isArray(r.funs)) {
                    requestHandlers = r.funs as RequestHandler[];
                    // extendRouters.get(r.url as string, ...requestHandlers);
                    r.methods?.forEach(x => {
                        extendRouters[x](r.url as any as string, r.funs as RequestHandler[]);
                    });
                }
                else {
                    requestHandlers = r.funs as RequestHandler;
                    // extendRouters.get(r.url as string, requestHandlers);
                    r.methods?.forEach(x => {
                        extendRouters[x](r.url as any as string, r.funs as RequestHandler[]);
                    });
                }
                // const requestHandlers: RequestHandler | RequestHandler[] = r.funs as RequestHandler[];
                // extendRouters.get(r.url as string, r.fun as RequestHandler[]);
                // extendRouters.get(r.url as string, ...requestHandlers);
            }
            if (r.routes.length > 0) {
                if (r.prefix === undefined) {
                    expandRoutes<IRouter, Router>(r.prefix || '', r.routes)
                }
            }
        }
        return extendRouters;
    }

    configureSetting() {
        this.httpSvr.use(bodyparser.json());
        this.httpSvr.use(bodyparser.urlencoded({ extended: true })); // to support URL-encoded bodies
        this.httpSvr.use(cors());
        this.httpSvr.use(express.json({ limit: '1000MB' }));
        this.httpSvr.use('/', this.configureRoutes());
        this.httpSvr.use(errorHandler);
    }

    init() {
        this.configureSetting();

        http.createServer(this.httpSvr).listen(this.PORT, () => {
            console.log(`Server is running on PORT : ${this.PORT}`);
        })
    }
}