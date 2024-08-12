import { ITest } from './types';

export class TestService {
  async test(): Promise<ITest> {
    return {
      text: 'Hello World',
      id: 1,
    } satisfies ITest;
  }
}
