import { Request } from 'express'
import GmClientMock from './helpers/gmClientMock'

describe("GmClient test", () => {
    it("GmClient returns result", async () => {
        const gmClientMock = new GmClientMock()
        const foo = {} as Request
        const result = await gmClientMock.getGeoCode(foo)
        expect(result.status).toEqual(200);
    });
});