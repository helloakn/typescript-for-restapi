# Typescript For RestAPI

[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) 

[![NodeJs](https://img.shields.io/badge/nodejs-v18.6.0-green)](https://github.com/helloakn/typescript-for-restapi) 
[![Express](https://img.shields.io/badge/express-v^4.18.1-green)](https://github.com/helloakn/typescript-for-restapi) 

## Table of content
- [1] File Structure
- [2] Git Conventional Commits Message
- [3] Routing

----

### [1] File Structure
```
-typescript-for-restapi
├── __tests__                         # for testing
│   ├── e2e-tests                     # for all the integration tests
│   └── unit-tests                    # for all the integration tests 
├── src                               # for typescripts
│   ├── app                           # AS AS Open/Close Principle
│   │   ├── controllers
│   │   │    └─ ...            
│   │   ├── middlewares               
│   │   ├── models                    # for database table
│   │   └── routes                    # for admin / user / swigger api routes etc
│   ├── config                        # for main functions and components
│   │   └─ ...
│   ├── core                          # for main functions and components
│   │   └─ ...
├...

```

---

### [2] Git Conventional Commits Message
<pre>
<b><a href="#body">[Type] : Message</a></b>
<sub>Type =>  [Create], [Modify], [Fix], [Delete]</sub>
<sub>Message =>  Describe about the commit</sub>

<b><a href="#body">Example</a></b>
<sub>[Create] message event for bla bla bla</sub>
<sub>[Modify] message event for bla bla bla</sub>
<sub>[Fix] message event for bla bla bla</sub>
</pre>

---


### [3] Route
 *  without controller
 *  with controller
 *  route prefix
 *  route Authorization {with guard}
#### Route Example
 *  Route : without controller
```javascript
import type { Request, Response, NextFunction } from 'express';
import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET } = REQUEST_METHODS;
const routers = new Routers();

const demoFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
routers.addRoute([GET], '/demo', [demoFun])

```
 *   Route : controller
```javascript
 import ServiceCheckController from '@/app/controllers/serviceCheck.controller';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';
const { GET } = REQUEST_METHODS;
const routers = new Routers();

export default routers
    .addRoute([GET], '/health-check', ServiceCheckController.healthCheck)

```

 *   Route : Prefix
```javascript
/* 
route prefix
*/

import type { Request, Response, NextFunction } from 'express';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET } = REQUEST_METHODS;
const routers = new Routers();

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default routers
    .addPrefix('/api/v1', (routers) => {
        routers
            .addRoute([GET], '/register', [testFun])
            .addRoute([GET], '/login', [testFun])
        return routers;
    });

```

 *   Route : with authorization
```javascript
/* 
route authorization
*/

import type { Request, Response, NextFunction } from 'express';
import { isAuthorizeAccess } from '@/app/middlewares';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET } = REQUEST_METHODS;
const routers = new Routers();

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default routers
    .addPrefix('/api/v1/user', (routers) => {
        routers
            .addRoute([GET], '/profile', [isAuthorizeAccess, testFun])
        return routers;
    });


```
*   Route : Multiple request method
```javascript
import type { Request, Response, NextFunction } from 'express';

import Routers from '@/core/route'
import { REQUEST_METHODS } from '@/config';

const { GET,POST,PUT } = REQUEST_METHODS;
const routers = new Routers();

const testFun = (req: Request, res: Response, next?: NextFunction) => {
    res.status(200).json({ 'msg': 'tes testFunt' })
}
export default routers
.addRoute([GET,POST,PUT], '/profile', [ testFun])
```
- - -