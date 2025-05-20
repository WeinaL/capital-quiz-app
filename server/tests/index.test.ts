import request from "supertest";
import app from "../src/index"; // Adjust the path to your app file
import { Server } from "http";
import { beforeAll, afterAll, describe, it, expect } from '@jest/globals';

let server: Server;

beforeAll(() => {
  server = app.listen(3002);
});

afterAll((done) => {
  server.close(done);
});

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

describe("GET /getAllQuestions", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/getAllQuestions");
    expect(response.status).toBe(200);
  });

  it("should have at least one question", async () => {
    const response = await request(app).get("/getAllQuestions");
    expect(response.text.length).toBeGreaterThan(0);
  });
});

describe("GET /getQuestion", () => {
  it("should return a 200 status code", async () => {
    const response = await request(app).get("/getQuestion");
    expect(response.status).toBe(200);
  });

  it("question should contain country and capital", async () => {
    const response = await request(app).get("/getQuestion");
    expect(response.text).toContain("country");
    expect(response.text).toContain("capital");
  });
});