const server = require('gulp-develop-server');
const livereload = require('gulp-livereload');
const path = require('path');
const chokidar = require('chokidar');

const serverStart = () => {
  return new Promise((resolve, reject) => {
    server.listen({ path: path.join(__dirname, '../server/index.js') },
    (error) => {
      livereload.listen();
      if (error) reject();
      resolve();
    });
  });
};

const serverRestart = () => {
  let isReady = false;
  const onFileChanged = (event, file) => {
    return new Promise((resolve, reject) => {
      server.changed((error) => {
        if (error) reject();
        livereload.changed(file); resolve();
      });
    }).catch(error => console.log(error));
  };
  chokidar.watch(path.resolve('profiles.json'))
    .on('ready', () => { isReady = true; })
    .on('all', (event, path) => {
      if (isReady) {
        switch(event) {
          case 'add':
          case 'change':
            onFileChanged(event, path); 
          break;
        }
      }
    });
};

serverStart()
  .then(() => serverRestart())
  .catch(error => console.log(error));