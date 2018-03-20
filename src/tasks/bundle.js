
const { bundle } = require('@ngx-devtools/bundle');
const { startAsync, doneAsync, deleteFolderAsync } = require('@ngx-devtools/common');

const bundleAsync = async ()  => { 
  await startAsync('bundle')
    .then(startTime => bundle().then(() => Promise.resolve(startTime)))
    .then(startTime => doneAsync('bundle', null, startTime));
};

Promise.all([ deleteFolderAsync('dist'), deleteFolderAsync('.tmp') ])
  .then(() => bundleAsync())
  .then(() => deleteFolderAsync('.tmp'))
  .catch(error => console.log(error));
