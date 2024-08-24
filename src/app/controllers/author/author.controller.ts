import type { Request, Response, NextFunction } from 'express';
import { HTTP_STATUS_CODE } from '@/config';

import { DemoValidator } from '@/app/validators/serviceCheck/DemoValidator';
import { Validate } from '@/core/decorators';

import RegisterAuthor, { RegistrationValidator } from '@/app/modules/author/register'

export default class AuthorController {

  @Validate<RegistrationValidator>(RegistrationValidator)
  static async register(req: Request, res: Response, next?: NextFunction) {
    const { name, email, phone, gender, password } = req.body;
    const input = { name, email, phone, gender, password };

    // const result = await AuthorRegister.execute(input as unknown as IAuthorFields);
    const result = await RegisterAuthor.execute(input);

    res.status(HTTP_STATUS_CODE.OK).json(result)
  }

  static isMaintenance(req: Request, res: Response, next?: NextFunction) {
    res.status(HTTP_STATUS_CODE.OK).json({ 'msg': 'it is not maintenancee' })
  }

  // @Validate<DemoValidator>(DemoValidator)
  static validateDemo(req: Request, res: Response, next?: NextFunction) {
    res.status(HTTP_STATUS_CODE.OK).json({ 'msg': 'demo' })
  }
}
