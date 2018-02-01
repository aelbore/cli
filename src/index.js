#!/usr/bin/env node

const pkg = require('../package.json');

require('yargs')
  .alias('v', 'version')
  .version(pkg.version)
  .usage('Usage: $0 run <task>')
  .command({
    command: 'run <task>',
    desc: 'Run or execute task',
    handler: (argv) => {

      require(`../src/${argv.task}`)
    }
  })
  .help()
  .alias('h', 'help')
  .wrap(72)
  .argv
