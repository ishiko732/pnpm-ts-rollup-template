import TestDequeue from './test';

export * from './hello';
export * from './test';

console.log(TestDequeue());

export async function rustHello() {
  const wasm = await import('../Cargo.toml');
  const { say_hello } = await wasm.default();
  say_hello('dozo');
}


rustHello();