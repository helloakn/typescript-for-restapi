import http from 'http';
import request from 'supertest';
import { Server } from '@/core/server';
import { HTTP_STATUS_CODE, ERRORS } from '@/config';
const { FORBIDDEN_ERROR } = ERRORS;

jest.setTimeout(5000);

let server: Server;
let apiServer: http.Server;

beforeAll(done => {
    server = new Server();
    server.configureSetting();
    apiServer = http.createServer(server.httpSvr);
    apiServer.listen(process.env.PORT);
    done()
});
afterAll(done => {
    // terminate the app.
    apiServer.close();
    done()
});

describe('api / v1 / user : profile', () => {

    test('TEST  profile route, it should return 403 Success status code WHEN invalid access token', (done) => {
        // GIVEN
        const svr = request(server.httpSvr);

        const { code, msg } = FORBIDDEN_ERROR;
        // WHEN
        const result = svr.get('/api/v1/user/profile');

        // THEN
        result
            .expect(code)
            .expect('Content-Type', /json/)
            .expect({ msg }, done);
    });

    test('TEST  profile route, it should return 200 Success status code WHEN request has valid access token', (done) => {
        // GIVEN
        const svr = request(server.httpSvr);

        // WHEN
        const result = svr.get('/api/v1/user/profile').set({
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbkFjY291bnQiOiJoZWxsbzEyMyIsImF1dGhUeXBlIjoid3d3IiwiaWF0IjoxNzI0MDgzMTE0LCJleHAiOjE3MjQ2ODc5MTR9.CjmM-GJJICzGTWfEmFEnnJthYSA7yVUgO_W7qNLpRUQ'
        });

        // THEN
        result
            .expect(HTTP_STATUS_CODE.OK)
            .expect('Content-Type', /json/)
            .then(response => {
                expect(response.body).toHaveProperty('msg');
                done();
            });
    });
});

