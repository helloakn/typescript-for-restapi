import type { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { HTTP_CONFIG } from '@/config';
import { ERRORS } from '@/config/constants';

const { JWT_KEY } = HTTP_CONFIG;
const { FORBIDDEN_ERROR } = ERRORS;


export const isAuthorizeAccess = (req: Request, res: Response, next: NextFunction) => {

    // const key = jwt.sign(
    //     { adminAccount: 'hello123', authType: 'www' },
    //     JWT_KEY,
    //     { expiresIn: '7d' }
    // )
    // console.log('key=>', key)

    const token = req.headers['x-access-token'] as any as string;
    if (!token) throw FORBIDDEN_ERROR;

    jwt.verify(token, JWT_KEY, function (err, auth) {
        if (err) throw FORBIDDEN_ERROR;
        // console.log('auth=>', auth)
        // // if everything good, save to request for use in other routes
        // if (auth.authType !== 'admin') return res.status(StatusCodes.Forbidden).send({ code: StatusCodes.Forbidden, status: 'failed!', error: [{ msg: 'Failed to authenticate admin token.' }] })

        // req.authType = auth.authType
        // req.adminAccount = auth.adminAccount
        next();
    })
}
