import { Response, Request } from 'express';
import { beforeAll, afterAll, beforeEach, jest } from '@jest/globals';

declare global {
  // Augment NodeJS.Global
  // eslint-disable-next-line no-var
  var mockRequest: (body?: any, query?: any, params?: any) => Partial<Request>;
  // eslint-disable-next-line no-var
  var mockResponse: () => Partial<Response>;
}

beforeAll(() => {
  process.env.NODE_ENV = 'test';
});

afterAll(() => {
  // Clean up after all tests
});

beforeEach(() => {
  jest.resetModules();
  jest.clearAllMocks();
});

// Mock Express response and request objects
global.mockResponse = () => {
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
    send: jest.fn().mockReturnThis()
  } as Partial<Response>;
  return res;
};

global.mockRequest = (body = {}, query = {}, params = {}) => ({
  body,
  query,
  params
} as Partial<Request>);

export {};
