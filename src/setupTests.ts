// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { server } from './test/server';

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Mock localstorage
beforeEach(() => {
  const localStorageMock = (function () {
    let store = new Map();
    return {
      getItem(key: string): string {
        return store.get(key);
      },
      setItem: function (key: string, value: string) {
        store.set(key, value);
      },
      clear: function () {
        store = new Map();
      },
      removeItem: function (key: string) {
        store.delete(key);
      },
    };
  })();
  Object.defineProperty(window, 'localStorage', { value: localStorageMock });
});

afterEach(() => {
  // Reset any runtime request handlers we may add during the tests.
  server.resetHandlers();
  // Clear localstorage values
  window.localStorage.clear();
});

// Disable API mocking after the tests are done.
afterAll(() => server.close());
