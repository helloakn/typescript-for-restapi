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

describe('ServiceCheck - api - v1 - is-maintenance', () => {
    test('TEST  is-maintenance route, it should return 200 Success status code WHEN request from client', (done) => {
        // GIVEN
        const svr = request(server.httpSvr);

        // WHEN
        const result = svr.get('/is-maintenance');

        // THEN
        result
            .expect(HTTP_STATUS_CODE.OK)
            .expect('Content-Type', /json/)
            .expect({ 'msg': 'it is not maintenancee' }, done);
    });
});

