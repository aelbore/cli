
const rimrafAsync = require('../utils/rimraf');

const { startAsync, doneAsync } = require('../utils/text');
const { build, watch } = require('@ngx-devtools/build');

const buildAsync = async ()  => { 
  await startAsync('build')
    .then(startTime => build().then(() => Promise.resolve(startTime)))
    .then(startTime => doneAsync('build', null, startTime));
};

rimrafAsync('dist')
  .then(() => buildAsync())
  .catch(error => console.log(error));
  
  
