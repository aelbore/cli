const server = require('gulp-develop-server');

require('../server/start')(server)
  .then(() => require('../server/watch')(server))
  .catch(error => console.log(error));