const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const scale = require('./src/shared/helpers/scale')();
const breakpoints = require('./src/shared/breakpoints');

module.exports = {
  plugins: [
    autoprefixer,
    cssnano({ preset: 'default' }),
    'postcss-mixins',
    'postcss-nested',
    [
      'postcss-functions',
      {
        functions: {
          scale,
        },
      }
    ],
    [
      'postcss-simple-vars',
      {
        variables: breakpoints,
      }
    ],
  ]
};
