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
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOW: 405,
    UNSUPPORTED_MEDIA_TYPE: 415,
} as const;

export const ERRORS = {
    UNKNOWN_ERROR: {
        code: 500,
        msg: 'Unknown Error'
    },
    Forbidden: {
        code: 403,
        msg: 'Forbidden: You may need autohrization!'
    },
}
