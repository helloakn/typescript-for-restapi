import express, { Router, RequestHandler } from 'express';
import * as bodyparser from 'body-parser';
import http from 'http';
import cors from 'cors';
import type { IRouter } from '@/core/route';
import dotenv from 'dotenv';
dotenv.config();
import { HTTP_CONFIG } from '@/config';

import * as routes from '@/app/routes';

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
                    console.log('url=>', url)
                    extendRouters.get(url, r.fun as RequestHandler);
                }
                if (r.routes.length > 0) {
                    const prefixUrl = prefix + r.prefix
                    expandRoutes<IRouter, Router>(prefixUrl, r.routes)
                }
            });
            return extendRouters as Y;
        }

        for (const [_, r] of Object.entries(routes)) {
            console.log('-----', _)
            if (r.url !== '' && r.url !== undefined) {
                console.log('r.url=>', r.url)
                extendRouters.get(r.url as string, r.fun as RequestHandler);
            }
            if (r.routes.length > 0) {
                if (r.prefix === undefined) {
                    expandRoutes<IRouter, Router>(r.prefix || '', r.routes)
                }
            }
        }
        return extendRouters;
    }

    init() {
        this.httpSvr.use(bodyparser.json());
        this.httpSvr.use(bodyparser.urlencoded({     // to support URL-encoded bodies
            extended: true
        }));
        this.httpSvr.use(cors());
        this.httpSvr.use(express.json({ limit: '1000MB' }));
        this.httpSvr.use('/', this.configureRoutes());

        http.createServer(this.httpSvr).listen(this.PORT, () => {
            console.log(`Server is running on PORT : ${this.PORT}`);
        })
    }
}