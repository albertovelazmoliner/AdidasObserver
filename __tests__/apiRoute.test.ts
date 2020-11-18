import request from "supertest"
import app from "../src/app"


describe("GET /api - api status endpoint", () => {
    it("API status API Request", async () => {
        const result = await request(app).get("/api");
        expect(result.text).toEqual("{\"title\":\"Adidas Observer API\",\"status\":\"success\"}");
        expect(result.status).toEqual(200);
    });
});