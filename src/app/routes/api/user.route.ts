
import type { Request, Response, NextFunction } from 'express';

import ServiceCheckController from '@/app/controllers/serviceCheck.controller';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET, POST, DELETE, PUT } = REQUEST_METHODS;

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default Routers
    .addRoute([GET], '/health-check', ServiceCheckController.healthCheck)
    .addRoute([GET, POST], '/is-maintenance', ServiceCheckController.isMaintenance)
    .addRoute([GET], 'test', testFun)
    .addPrefix('/api/v1', (routers) => {
        routers
            .addRoute([GET], '/register', testFun)
            .addRoute([GET], '/login', testFun)
            .addRoute([GET], '/hello', testFun)
        return routers;
    })
    .addPrefix('/api/v2', (routers) => {
        routers
            .addRoute([GET], '/r1', testFun)
            .addRoute([GET, POST], '/r2', testFun)
            .addPrefix('/hehe', (routers) => {
                routers
                    .addRoute([GET], '/h1', testFun)
                    .addRoute([GET, POST], '/h2', testFun)
                return routers;
            })
            .addRoute([GET], '/i-am-from-v2', testFun)

        return routers;
    });
