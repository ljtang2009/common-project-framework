import jsonc from './jsonc.js';
import extension from './extension.js';
import { addPluginName } from '../../../util/ruleTools.js';

const ruleGroups = [jsonc, extension];

/**
 * 获取规则
 * @param pluginName 插件名称
 * @returns 规则对象
 */
function getRules(pluginName: string): Record<string, unknown> {
  return addPluginName(pluginName, ruleGroups);
}

export default { getRules };
