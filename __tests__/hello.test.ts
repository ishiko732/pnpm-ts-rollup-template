import { describe, test } from 'node:test';
import assert from 'node:assert';
import { hello } from '@/hello';

describe('index.ts', () => {
  test('hello world', () => {
    assert.strictEqual(hello(), 'Hello World');
    // assert(hello()).to('Hello World');
  });
});
