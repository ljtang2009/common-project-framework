import { getUserAgentRegex } from 'browserslist-useragent-regexp';
import browserslist from 'browserslist';
import fs from 'node:fs';
import { join } from 'desm';
import { minify } from 'uglify-js';

const browsers = browserslist(undefined, {
  env: process.env.NODE_ENV,
});

const regex = getUserAgentRegex({
  browsers,
  allowHigherVersions: true,
});

const template = minify(`
  const supportedBrowsers = ${String(regex)};
  if (!supportedBrowsers.test(navigator.userAgent)) {
    var message = '<h1>当前浏览器不支持该功能</h1>';
    message += '<div/>请使用下列浏览器：</div>';
    message += '<ul>';
    message += '${browsers.reduce((sum, item) => `${sum}<li>${item}</li>`, '')}';
    message += '</ul>';
    document.getElementById('root').innerHTML = message;
  }
`).code;

fs.writeFileSync(join(import.meta.url, '..', 'public/scripts/supportedBrowsers.js'), template);
