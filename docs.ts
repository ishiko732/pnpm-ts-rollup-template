import * as td from 'typedoc';

// Application.bootstrap also exists, which will not load plugins
// Also accepts an array of option readers if you want to disable
// TypeDoc's tsconfig.json/package.json/typedoc.json option readers
const app = await td.Application.bootstrapWithPlugins({
  name: 'pnpm-ts-rollup-template',
  titleLink: 'https://github.com/ishiko732/pnpm-ts-rollup-template',
  entryPoints: ['src/index.ts'],
  plugin: ['typedoc-plugin-katex', 'typedoc-plugin-extras'],
  out: 'docs',
  navigationLinks: {
    Docs: 'https://github.com/ishiko732/pnpm-ts-rollup-template',
    GitHub: 'https://github.com/ishiko732/pnpm-ts-rollup-template',
  },
  visibilityFilters: {
    protected: false,
    private: false,
    inherited: false,
    external: false,
  },
});
const project = await app.convert();

if (project) {
  const outputDir = 'docs';
  // Generate HTML rendered docs
  await app.generateDocs(project, outputDir);
}
