import antfu from '@antfu/eslint-config';

const config = antfu(
  {
    type: 'lib',
    pnpm: true,
    typescript: {
      overrides: {
        'perfectionist/sort-imports': [
          'error',
          {
            groups: [
              'type',
              [
                'parent-type',
                'sibling-type',
                'index-type',
                'internal-type',
              ],
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              // 'side-effect',
              'object',
              'unknown',
            ],
            newlinesBetween: 'always',
            internalPattern: ['^@/.+'],
            order: 'asc',
            type: 'natural',
          },
        ],
      },
    },
    stylistic: {
      semi: true,
    },
  },
);

console.dir(config, { depth: 8 });

export default config;
