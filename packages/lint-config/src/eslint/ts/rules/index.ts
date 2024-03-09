import base from './base.js';
import stylistic from './stylistic.js';
import recommended from './recommended.js';
import strict from './strict.js';
import { addPluginName } from '../../../util/ruleTools.js';

const ruleGroups = [base, stylistic, recommended, strict];

/**
 * 获取规则
 * @param pluginName 插件名称
 * @returns 规则对象
 */
function getRules(pluginName: string): Record<string, unknown> {
  return addPluginName(pluginName, ruleGroups);
}

export default { getRules };
