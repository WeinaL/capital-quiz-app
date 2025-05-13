import request from "supertest";
import app from "../src/app";

describe("GET /api", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });

  it("should return 'Hello World!'", async () => {
    const response = await request(app).get("/api");
    expect(response.text).toBe("Hello World!");
  });
});
