const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const scale = require('./src/shared/helpers/scale')();

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
    'postcss-simple-vars',
  ]
};
