/**
 * 将插件名称添加到规则对象中
 * @param pluginName 插件名称
 * @param rules 规则对象
 * @returns 添加插件名称后的规则对象
 */
function addPluginNameToRules(
  pluginName: string,
  rules: Record<string, unknown>,
) {
  return Object.keys(rules).reduce(
    (result: Record<string, unknown>, key: string) => Object.assign(result, { [`${pluginName}/${key}`]: rules[key] }),
    {},
  );
}

/**
 * 添加插件名称到规则对象或规则数组
 * @param pluginName 插件名称
 * @param rules 规则对象或规则数组
 * @returns 添加插件名称后的规则对象或规则数组
 */
export function addPluginName(
  pluginName: string,
  rules: Record<string, unknown> | Array<Record<string, unknown>>,
) {
  if (rules instanceof Array) {
    return rules.reduce(
      (result, group) => Object.assign(
        result,
        addPluginNameToRules(pluginName, group),
      ),
      {},
    );
  }
  return addPluginNameToRules(pluginName, rules);
}
