#!/usr/bin/env node

const pkg = require('../package.json');

require('yargs')
  .alias('v', 'version')
  .version(pkg.version)
  .usage('Usage: $0 run <task>')
  .command({
    command: 'run <task>',
    desc: 'Run or execute a task <bundle|build|test|lint>',
    handler: (argv) => require(`../src/tasks/${argv.task}`)
  })
  .example('$0 run bundle', 'Run the bundle task')
  .demandCommand()
  .help()
  .alias('h', 'help')
  .wrap(72)
  .argv
