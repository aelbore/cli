const vfs = require('vinyl-fs');
const path = require('path');
const glob = require('glob');

const { streamToPromise } = require('@ngx-devtools/common');

const serverConfig = require('../utils/devtools');
const injectLiveReload = require('../utils/inject-livereload');

module.exports = () => {
  return new Promise((resolve, reject) => {
    if (!(serverConfig['distRoot'])) reject();
    resolve(serverConfig.distRoot);
  }).then((publicPath) => {
    const file = path.resolve(publicPath, 'index.html');
    return streamToPromise(vfs.src(file)
      .pipe(injectLiveReload())
      .pipe(vfs.dest(publicPath))
    );
  }).catch(error => console.log(error));
};