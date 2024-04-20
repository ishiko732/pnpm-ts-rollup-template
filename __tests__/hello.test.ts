import { hello } from '../src/hello';

describe('index.ts', () => {
  test('hello world', () => {
    expect(hello()).toBe('Hello World');
  });
});
