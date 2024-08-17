/*
*
*    TESTs cover for Behavior-Driven Development (BDD) // Given, When, Then
* 
*/

import type { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { errorHandler } from '@/app/middlewares';
import { ERRORS } from '@/config/constants'
const { UNKNOWN_ERROR, FORBIDDEN_ERROR } = ERRORS;

const res: Response = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn()
} as any as Response
describe('src - middlewares - errorHandlers', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })
    afterEach(() => {
        jest.clearAllMocks();
    });
    test('TEST errorHandler should be function', () => {
        expect(typeof errorHandler === 'function').toBe(true);
    });

    test('TEST errorHandler should handle UNKNOWN_ERROR WHEN exception does not inclue code', () => {
        // GIVEN
        const error = new Error('not include error code');
        const req = {} as Request;
        const next = jest.fn();

        // WHEN
        errorHandler(error, req, res, next);
        // THEN
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(UNKNOWN_ERROR.code);
        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send).toHaveBeenCalledWith({ msg: UNKNOWN_ERROR.msg });
    });

    test('TEST errorHandler should handle regarding expection WHEN exception inclues code', () => {
        // GIVEN
        interface TError extends Error {
            code?: number
            msg?: string
        }
        const req = {} as Request;
        const next = jest.fn();
        const { code, msg } = FORBIDDEN_ERROR;
        const error: TError = { ... new Error(msg), code, msg };

        // WHEN
        errorHandler(error, req, res, next);
        // THEN
        expect(res.status).toHaveBeenCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(code);
        expect(res.send).toHaveBeenCalledTimes(1);
        expect(res.send).toHaveBeenCalledWith({ msg });
    });
});