import TestDequeue from './test';
import { loadFSRS } from './wasm';

export * from './hello';
export * from './test';
export * from './wasm';

console.log(TestDequeue());

async function consoleFSRS() {
  const f = await loadFSRS();
  console.log(f);
}
consoleFSRS();