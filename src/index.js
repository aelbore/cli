
exports.runCommand = {
  command: 'run <task>',
  desc: 'Run or execute a task <bundle|build|test|lint>',
  handler: (argv) => require(`../src/tasks/${argv.task}`)
};