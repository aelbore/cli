
const { startAsync, doneAsync, deleteFolderAsync } = require('@ngx-devtools/common');
const { build, watch } = require('@ngx-devtools/build');

const buildAsync = async ()  => { 
  await startAsync('build')
    .then(startTime => build().then(() => Promise.resolve(startTime)))
    .then(startTime => doneAsync('build', null, startTime));
};

deleteFolderAsync('dist')
  .then(() => buildAsync())
  .catch(error => console.log(error));
  
  
