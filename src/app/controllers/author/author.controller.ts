import type { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODE } from '@/config';

import { DemoValidator } from '@/app/validators/serviceCheck/DemoValidator';
import { Validate } from '@/core/decorators';

import AuthorRegister from '@/app/modules/author/register'

export default class AuthorController {
  static async register(req: Request, res: Response, next?: NextFunction) {
    const result = await AuthorRegister.execute({ name: 'akn' });
    res.status(HTTP_STATUS_CODE.OK).json(result)
  }

  static isMaintenance(req: Request, res: Response, next?: NextFunction) {
    res.status(HTTP_STATUS_CODE.OK).json({ 'msg': 'it is not maintenancee' })
  }

  @Validate<DemoValidator>(DemoValidator)
  static validateDemo(req: Request, res: Response, next?: NextFunction) {
    res.status(HTTP_STATUS_CODE.OK).json({ 'msg': 'demo' })
  }
}
