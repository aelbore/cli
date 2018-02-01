#!/usr/bin/env node

const pkg = require('../package.json');

const { runCommand } = require('../src')

require('yargs')
  .alias('v', 'version')
  .version(pkg.version)
  .usage('Usage: $0 run <task>')
  .command(runCommand)
  .example('$0 run bundle', 'Run the bundle task')
  .demandCommand()
  .help()
  .alias('h', 'help')
  .wrap(72)
  .argv
