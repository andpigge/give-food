
const defaults = {
  customProperty: '--scale'
};

const scale = (options) => (...values) => {
  if (!values.length) return 'scale()';

  const { customProperty } = { ...defaults, ...options };
  const [targetValues, ...restValues] = values;

  if (restValues.length || /^\d*\.?\d+%?$/.test(targetValues)) {
    return (`scale(${values.join(', ')})`);
  }

  return targetValues.replace(/(\d*\.?\d+)px/gi, `calc(var(${customProperty}) * $1)`);
};

module.exports = scale;
