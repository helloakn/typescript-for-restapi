import http from 'http';
import request from 'supertest';
import { Server } from '@/core/server';
import { HTTP_STATUS_CODE } from '@/config'

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

describe('ServiceCheck - api - v1 - demo', () => {
    test('TEST  is-maintenance route, it should return 400 status code WHEN id is required', (done) => {
        // GIVEN
        const svr = request(server.httpSvr);

        // WHEN
        const result = svr.get('/demo');

        // THEN
        result
            .expect(HTTP_STATUS_CODE.BAD_REQUEST)
            .expect('Content-Type', /json/)
            .expect({ "msg": "ID is Required" }, done);
    });

    test('TEST  is-maintenance route, it should return 200 Success status code WHEN request from client', (done) => {
        // GIVEN
        const svr = request(server.httpSvr);

        // WHEN
        const result = svr.get('/demo?id=1');

        // THEN
        result
            .expect(HTTP_STATUS_CODE.OK)
            .expect('Content-Type', /json/)
            .expect({ msg: 'demo' }, done);
    });
});

