export type {
  Router as TRouter,
  Request as TRequest,
  Response as TResponse,
  NextFunction as TNextFunction
} from 'express';

export interface TDic {
  [key: string]: string | number | Date | boolean | null | undefined | TDic | TDic[];
}

export type TAny = string | number | Date | boolean | null | undefined | TDic | TDic[];
