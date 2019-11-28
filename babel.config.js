module.exports = {
  presets: [
    ["react-app", { "absoluteRuntime": false }],
  ],
  plugins: [
    ['minify-constant-folding'],
    ['minify-dead-code-elimination'],
    ['minify-flip-comparisons'],
    ['minify-guarded-expressions'],
    ['minify-infinity'],
    ['minify-mangle-names'],
    ['minify-replace'],
    ['minify-simplify'],
    ['minify-type-constructors'],
    ['transform-member-expression-literals'],
    ['transform-merge-sibling-variables'],
    ['transform-minify-booleans'],
    ['transform-property-literals'],
    ['transform-simplify-comparison-operators'],
    ['transform-undefined-to-void'],
  ],
}
