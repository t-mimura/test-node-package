#! /usr/bin/env node

'use strict';

const test = require('../lib/test');
const program = require('commander');
const version = require('../package.json').version;

function toInteger(arg) {
  let value = parseInt(arg, 10);
  if (isNaN(value) || value < 1) {
    console.error('number of times should be greater than or equal to 1.');
    process.exit(1);
  }
  return value;
}

program
  .version(version)
  .usage('[options] [hoge]')
  .option('-t, --times <n>', 'number of times [1]', toInteger, 1)
  .parse(process.argv);

for (let i = 0; i < program.times; i++) {
  test.sayHoge(program.args[0]);
}
