import { expect, describe, test } from '@jest/globals';
import { hello } from '@/hello';

describe('index.ts', () => {
  test('hello world', () => {
    expect(hello()).toBe('Hello World');
  });
});
