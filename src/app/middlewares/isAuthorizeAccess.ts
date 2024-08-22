import type { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { HTTP_CONFIG } from '@/config';
import { ERRORS } from '@/config/constants';

const { JWT_KEY } = HTTP_CONFIG;
const { FORBIDDEN_ERROR } = ERRORS;


export const isAuthorizeAccess = (req: Request, res: Response, next: NextFunction) => {

  const token = req.headers['x-access-token'] as any as string;
  if (!token) throw FORBIDDEN_ERROR;

  jwt.verify(token, JWT_KEY, function (err, auth) {
    if (err) throw FORBIDDEN_ERROR;
    next();
  })
}
