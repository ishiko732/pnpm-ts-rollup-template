import { loadFSRS } from '../src';


describe('wasm.ts', () => {
  test('loadFSRS', async () => {
    const f = await loadFSRS();
    expect(typeof f.computeParametersAnki).toBe('function');
  });
});