import rules from './rules/index.js';

export default {
  plugins:                       [],
  defaultSeverity:               'error', // 默认严重度等级
  // 报告没有评论的disable注释
  // 报告：
  /* stylelint-disable-next-line block-no-empty */
  // 不报告
  /* stylelint-disable-next-line block-no-empty -- This problem is ignorable. */
  reportDescriptionlessDisables: true,
  // 报告配置文件中没有对应匹配规则的disable注释
  reportInvalidScopeDisables:    [true, { severity: 'warning' }],
  // 报告配置文件中以禁用的规则对应的disable注释
  reportNeedlessDisables:        [true, { severity: 'warning' }],
  // 忽略所有disable注释
  ignoreDisables:                false,
  rules,
};
