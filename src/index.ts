import TestDequeue from './test';
import { consoleFSRS } from './wasm';

export * from './hello';
export * from './test';
export * from './wasm';

console.log(TestDequeue());

consoleFSRS();