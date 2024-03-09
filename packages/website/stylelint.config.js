import lintConfig from '@tanglijin/lint-config';
import _ from 'lodash';

/** @type {import('stylelint').Config} */
export default {
  ..._.merge(
    lintConfig.stylelint.buildIn,
    lintConfig.stylelint.order,
    lintConfig.stylelint.prettier,
    {
      ignoreFiles: ['dist/**/*.css'],
    },
  ),
};
