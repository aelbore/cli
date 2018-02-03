const livereload = require('gulp-livereload');
const path = require('path');

const serverStart = (server) => {
  return new Promise((resolve, reject) => {
    server.listen({ path: path.join(__dirname, '../server/index.js') },
    (error) => {
      livereload.listen();
      if (error) reject();
      resolve();
    });
  });
};

module.exports = serverStart;