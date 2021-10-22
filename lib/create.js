const fs = require('fs');
const Creator = require('./Creator')

const getPromptModules = () => {
    return [
        'linter',
    ].map(file => require(`./promptModules/${file}`))
}

const create = (name) => {
    const creator = new Creator();

}

module.exports = create;