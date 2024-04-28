module.exports = {
  presets: [],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          { targets: { node: '16.0' }, modules: 'auto'},
          '@babel/preset-typescript',
        ],
      ],
      plugins: [
        [
          'import',
          {
            libraryName: 'fsrs-browser',
          },
        ],
        '@babel/plugin-proposal-import-wasm-source',
        'babel-plugin-transform-import-meta',
      ],
    },
  },
};
