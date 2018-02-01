
const { bundle } = require('@ngx-devtools/bundle');

const { startAsync, doneAsync } = require('../utils/text');

const rimrafAsync = require('../utils/rimraf')

const bundleAsync = async ()  => { 
  await startAsync('bundle')
    .then(startTime => bundle().then(() => Promise.resolve(startTime)))
    .then(startTime => doneAsync('bundle', null, startTime));
};

Promise.all([ rimrafAsync('dist'), rimrafAsync('.tmp') ])
  .then(() => bundleAsync())
  .then(() => rimrafAsync('.tmp'))
  .catch(error => console.log(error));
