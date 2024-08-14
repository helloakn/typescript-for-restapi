import type { TDic } from '@/core/types'
import type { Request, Response, NextFunction } from 'express';
import { REQUEST_METHODS } from '@/config';
/*

health-check

api/v1/register
api/v1/user/logout , isLogging
api/v1/user/profile , islogging
api/v1/user/profile/edit, islogging
api/v1/user/profile/change-password, islogging

api/v2/register
api/v2/user/logout , isLogging
api/v2/user/profile , islogging
api/v2/user/profile/edit, islogging isAdmin
-----
api/v1
    -> register
    -> user
        -> logout
        -> profile
            ->/ index
            ->edit

 routers = [
    {
        prefix:'api/v1',
        routes:[
            { url:'register',function:registrationFun},
            { 
                prefix:'user',
                routes:[
                    { url:'/',function:userIndex, methods:[get,post]},
                    { url:'edit',function:userEdit, methods:[get,post]},
                    { url:'change-password',function:changePassword, methods:[get,post]},
                ]
             }
        ]
    }
 ]
*/


type Keys = keyof typeof REQUEST_METHODS;
type TRequestMethod = typeof REQUEST_METHODS[Keys];

export interface TFun { (req: Request, res: Response, next?: NextFunction): void }

interface IAddPrefixCallBack {
    (routers: IRouter): IRouter
}

export interface IRouter {
    prefix?: string
    routes: IRouter[]
    url?: string
    fun?: TFun
    middlewares?: TFun[]
    methods?: TRequestMethod[]

    addRoute(methods: TRequestMethod[], url: string, fun: TFun, middlewares?: TFun[]): IRouter
    addPrefix(prefixUrl: string, callBack: IAddPrefixCallBack, middlewares?: TFun[]): IRouter
}
interface Router extends IRouter { };
class Router {
    routes: IRouter[] = [];
    constructor() { }
    addRoute(methods: TRequestMethod[], url: string, fun: TFun, middlewares?: TFun[]): IRouter {
        const newRoute: IRouter = new Router();
        newRoute.url = url;
        newRoute.methods = methods;
        newRoute.fun = fun;
        if (middlewares !== undefined) {
            newRoute.middlewares = middlewares;
        }
        this.routes.push(newRoute);
        return this;
    }
    addPrefix(prefixUrl: string, callBack: IAddPrefixCallBack, middlewares?: TFun[]): IRouter {
        const root: IRouter = new Router();
        root.prefix = prefixUrl;
        if (middlewares !== undefined) {
            root.middlewares = middlewares;
        }
        const children: IRouter = callBack(root);
        root.routes = children.routes
        this.routes.push(root)
        return this;
    }

}

export default new Router();
