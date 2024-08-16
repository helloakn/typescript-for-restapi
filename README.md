# Typescript For RestAPI

[![Star Count](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=Star&query=stargazers_count&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) [![Licence](https://img.shields.io/badge/dynamic/json?color=informational&label=LICENCE&query=license.name&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) [![Language](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Language&query=language&url=https%3A%2F%2Fapi.github.com%2Frepos%2Fhelloakn%2Ftypescript-for-restapi)](https://github.com/helloakn/typescript-for-restapi) 

[![NodeJs](https://img.shields.io/badge/nodejs-v18.6.0-green)](https://github.com/helloakn/typescript-for-restapi) 
[![Express](https://img.shields.io/badge/express-v^4.18.1-green)](https://github.com/helloakn/typescript-for-restapi) 

## Table of content
- [1] File Structure
- [2] Git Conventional Commits Message

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
│   ├── config                          # for main functions and components
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