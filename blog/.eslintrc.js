let { strictEslint } = require('@umijs/fabric');

strictEslint.rules['arrow-body-style'] = ['off', 'as-needed'];

module.exports = {
  ...strictEslint,
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
};
