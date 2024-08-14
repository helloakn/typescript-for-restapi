import e, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ERRORS } from '@/config';

const { UNKNOWN_ERROR } = ERRORS
interface ICustomError extends Error {
    code?: number,
    msg?: string
}
export const errorHandler: ErrorRequestHandler = (err: ICustomError, req: Request, res: Response, next: NextFunction) => {
    const responseFun = (error: ICustomError): void => {
        res.status(error.code as number).send({ msg: error.msg });
    }
    if (err.code) responseFun(err)
    else res.status(UNKNOWN_ERROR.code).send({ msg: UNKNOWN_ERROR.msg });
};
