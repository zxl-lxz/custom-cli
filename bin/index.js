#!/usr/bin/env node

const { program } = require('commander');
const create = require('../lib/create');
const version = require('../package.json').version;

program
.version(version)
.command('create <name>')
.description('create a new project')
.action(name => { 
    create(name);
})

program.parse();