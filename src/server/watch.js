const livereload = require('gulp-livereload');
const watchFiles = require('../server/watch-files');

module.exports = (server) => {
  let isReady = false;

  const onFileChanged = (file) => {
    return new Promise((resolve, reject) => {
      server.changed((error) => {
        if (error) reject();
        livereload.changed(file); resolve();
      });
    }).catch(error => console.log(error));
  };

  require('chokidar')
    .watch(watchFiles)
      .on('ready', () => { isReady = true; })
      .on('all', (event, path) => {
        if (isReady) {
          switch(event) {
            case 'add':
            case 'change':
              onFileChanged(path); 
            break;
          }
        }
      });
};