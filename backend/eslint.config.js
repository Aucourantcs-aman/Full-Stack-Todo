export default [
  {
    files: ['**/*.js'], // Only Check JS file in the dir
    rules: {
      semi: 'error', // force semicolons
      'no-unused-vars': 'warn', // Warn if used an un-used variable
    },
  },
];
