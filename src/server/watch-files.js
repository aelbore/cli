const path = require('path');
const fs = require('fs');
const glob = require('glob');

const watchFiles = () => {
  let watchFiles = [ path.resolve('api') ];
  const devToolsPath = path.resolve('.devtools.json');
  if (fs.existsSync(devToolsPath)) {
    const devTools = require(devToolsPath);
    const hasProperty = (devTools['server'] && devTools.server['watchFiles']);
    if (hasProperty && Array.isArray(devTools.server.watchFiles)) {
      devTools.server.watchFiles.forEach(files => { 
        const globFiles = glob.sync(path.resolve(files));
        watchFiles = watchFiles.concat(globFiles);
      });
    }
  }
  return watchFiles;
};

module.exports = watchFiles();

