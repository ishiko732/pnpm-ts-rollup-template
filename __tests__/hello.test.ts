import { expect, describe, test } from '@jest/globals'
import { hello } from '../src'

describe('index.ts', () => {
  test('hello world', () => {
    expect(hello()).toBe('Hello World')
  })
})
