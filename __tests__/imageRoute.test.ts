import request from 'supertest'
import app from '../src/app'

describe('GET /image - api image endpoint', () => {
    it('API image API Request without api_key', async () => {
        const result = await request(app).get('/image');
        expect(JSON.parse(result.text).errorMessage).toEqual('api_key is required')
        expect(result.status).toEqual(401);
    });

    it('API image API Request with bad api_key', async () => {
        const result = await request(app).get('/image?api_key=foobar');
        expect(JSON.parse(result.text).errorMessage).toEqual('api_key is not a valid value')
        expect(result.status).toEqual(401);
    });

    it('API image API Request without addressParams', async () => {
        const result = await request(app).get('/image?api_key=foo2020');
        expect(JSON.parse(result.text).errorMessage).toEqual('addressParams is required')
        expect(result.status).toEqual(400);
    });

    it('API image API Request with wrong addressParams', async () => {
        const result = await request(app).get('/image?api_key=foo2020&addressParams=few');
        expect(JSON.parse(result.text).errorMessage).toEqual('addressParams is not long enough')
        expect(result.status).toEqual(400);
    });

    it('API image API Request without deviceTpye', async () => {
        const result = await request(app).get('/image?api_key=foo2020&addressParams=Arzobispo');
        expect(JSON.parse(result.text).errorMessage).toEqual('deviceTpye is required')
        expect(result.status).toEqual(400);
    });

    it('API image API Request with wrong deviceTpye', async () => {
        const result = await request(app).get('/image?api_key=foo2020&addressParams=Arzobispo&deviceType=foo')
        expect(JSON.parse(result.text).errorMessage).toEqual('deviceType is not a valid value')
        expect(result.status).toEqual(400);
    });
});