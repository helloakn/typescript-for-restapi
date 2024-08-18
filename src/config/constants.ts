export const REQUEST_METHODS = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    PATCH: 'patch',
    DELETE: 'delete'
} as const;

export const HTTP_STATUS_CODE = {
    OK: 200,
    SERVER_ERROR: 500,
    REDIRECT: 300,
    BAD_REQUEST: 400,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOW: 405,
    UNSUPPORTED_MEDIA_TYPE: 415,
} as const;

export const ERRORS = {
    UNKNOWN_ERROR: {
        code: HTTP_STATUS_CODE.SERVER_ERROR,
        msg: 'Unknown Error'
    },
    FORBIDDEN_ERROR: {
        code: 403,
        msg: 'Forbidden: You may need autohrization!'
    },
}
