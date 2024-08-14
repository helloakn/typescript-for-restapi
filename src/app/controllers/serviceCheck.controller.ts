import type { Request, Response, NextFunction } from 'express';

export default class ServiceCheckController {
    static healthCheck(req: Request, res: Response, next?: NextFunction) {
        res.status(200).send('hello')
    }
    static isMaintenance(req: Request, res: Response, next?: NextFunction) {
        res.status(200).json({ 'msg': 'test' })
    }
}

