const { rimraf } = require('@ngx-devtools/common');
const { startAsync, doneAsync } = require('./text');

const rimrafAsync = async (folder) => {
  await startAsync('rimraf', folder)
    .then((startTime) => {
       return rimraf(folder)
        .then(() => Promise.resolve(startTime));
    }).then((startTime) => doneAsync('rimraf', folder, startTime));
};

module.exports = rimrafAsync;