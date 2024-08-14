
import type { Request, Response, NextFunction } from 'express';

import ServiceCheckController from '@/app/controllers/serviceCheck.controller';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';
const { GET, POST } = REQUEST_METHODS;
const routers = new Routers();

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default routers
    .addRoute([GET], '/health-check', ServiceCheckController.healthCheck)
    .addRoute([GET, POST], '/is-maintenance', ServiceCheckController.isMaintenance);
