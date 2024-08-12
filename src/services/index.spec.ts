import { TestService } from '@services/index'

describe('services.ts', () => {
  test('ts-paths types', async () => {
    const svc = new TestService()
    const result = await svc.test()
    expect(result.text).toBe('Hello World')
    expect(result.id).toBe(1)
  })
})
