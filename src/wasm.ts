import init, { Fsrs } from 'fsrs-browser/fsrs_browser';
import wasm from 'fsrs-browser/fsrs_browser_bg.wasm';

export async function loadFSRS() {
  await init(await wasm());
  const fsrs = new Fsrs();
  return fsrs;
}
