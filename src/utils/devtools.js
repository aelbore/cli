const { existsSync } = require('fs');
const { resolve } = require('path');

const getDevtools = () => {
  let devtoolsServer = null;
  const devToolsPath = resolve('.devtools.json');
  if (existsSync(devToolsPath)) {
    const devtools = require(devToolsPath);
    if (devtools['server']) {
      devtoolsServer = Object.assign({}, devtools.server);
    }
  }
  return devtoolsServer;
};

module.exports = getDevtools();