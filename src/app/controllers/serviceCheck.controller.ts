import type { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODE } from '@/config';

export default class ServiceCheckController {
    static healthCheck(req: Request, res: Response, next?: NextFunction) {
        res.status(HTTP_STATUS_CODE.OK).json({ msg: 'Service is running' })
    }

    static isMaintenance(req: Request, res: Response, next?: NextFunction) {
        res.status(HTTP_STATUS_CODE.OK).json({ 'msg': 'test' })
    }
}
