const server = require('gulp-develop-server');
const path = require('path');
const fs = require('fs');

const { injectReload, startServer, watchServer } = require('../server');

const beforeServe = async () => {
  const beforeServePath = path.resolve('tasks/before-serve.js');
  if (fs.existsSync(beforeServePath)) {
    const beforeServeTask = require(beforeServePath);
    await beforeServeTask();
  } else {
    await Promise.resolve();
  }
};

const afterServe = async () => {
  const afterServePath = path.resolve('tasks/after-serve.js');
  if (fs.existsSync(afterServePath)) {
    const afterServeTask = require(afterServePath);
    await afterServeTask();
  } else {
    await Promise.resolve();
  }
}

beforeServe()
  .then(() => startServer(server))
  .then(() => injectReload())
  .then(() => watchServer(server))
  .then(() => afterServe())
  .catch(error => console.log(error));