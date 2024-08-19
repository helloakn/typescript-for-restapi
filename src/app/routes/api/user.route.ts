
import type { Request, Response, NextFunction } from 'express';
import { isAuthorizeAccess } from '@/app/middlewares';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET, POST, DELETE, PUT } = REQUEST_METHODS;
const routers = new Routers();

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default routers
    .addPrefix('/api/v1/user', (routers) => {
        routers
            .addRoute([GET], '/register', [testFun])
            .addRoute([GET], '/login', [testFun])
            .addRoute([GET], '/profile', [isAuthorizeAccess, testFun])
        return routers;
    })
