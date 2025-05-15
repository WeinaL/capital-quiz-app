import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';

// Mock fetch globally
global.fetch = jest.fn(() => 
  Promise.resolve({
    json: () => Promise.resolve({ country: 'France', capital: 'Paris' }),
    ok: true
  } as Response)
);

// Clean up after each test
afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

// Suppress console.error and console.warn in tests
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      /Warning.*not wrapped in act/i.test(args[0]) ||
      /Warning.*cannot update a component/i.test(args[0])
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args: any[]) => {
    if (/Warning.*not wrapped in act/i.test(args[0])) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

// Restore console.error and console.warn after all tests
afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});
