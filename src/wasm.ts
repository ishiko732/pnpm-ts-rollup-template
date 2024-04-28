import init, { Fsrs } from 'fsrs-browser/fsrs_browser';
import wasm from 'fsrs-browser/fsrs_browser_bg.wasm';

export async function loadFSRS() {
  // await init(await import('fsrs-browser/fsrs_browser_bg.wasm').then((w) => w.default));
  await init(await wasm());
  const fsrs = new Fsrs();
  return fsrs;
}

export async function consoleFSRS() {
  const f = await loadFSRS();
  if(window){
    //@ts-ignore
    window.fsrs = f;
  }
  console.log(f);
}