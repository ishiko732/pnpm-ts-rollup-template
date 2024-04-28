use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace=console)]
    fn log(s: String);
}

#[wasm_bindgen]
pub fn say_hello(message: String) {
    log(format!("Hello {} in Rust", message));
}
