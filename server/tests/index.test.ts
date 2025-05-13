import request from "supertest";
import app from "../src/index";

describe("GET /api", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
  });

  it("should return 'Hello World!'", async () => {
    const response = await request(app).get("/api");
    expect(response.text).toBe("Hello World!");
  });

    it("should have at least one question", async () => {
    const response = await request(app).get("/getAllQuestions");
    expect(response.text.length).toBeGreaterThan(0);
  });

  it("question should contain country and capital", async () => {
    const response = await request(app).get("/getQuestion");
    expect(response.text).toContain("country");
    expect(response.text).toContain("capital");
  });
});
