
import type { Request, Response, NextFunction } from 'express';
import { isAuthorizeAccess } from '@/app/middlewares';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET, POST, DELETE, PUT } = REQUEST_METHODS;
const routers = new Routers();

import AuthorController from '@/app/controllers/author/author.controller';

export default
    routers
        .addPrefix('/api/v1/author', (routers) => {
            routers
                .addRoute([POST], '/register', AuthorController.register)
            return routers;
        });
