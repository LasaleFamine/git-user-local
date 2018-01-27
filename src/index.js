'use strict';

const {promisify} = require('util');
const path = require('path');
const {existsSync, readFile} = require('fs');
const {homedir} = require('os');
const ini = require('ini');

const pReadFile = promisify(readFile);

const getConfigPath = configPath => {
	const mainConfigPath = path.resolve(configPath || homedir(), '.gitconfig');
	return existsSync(mainConfigPath) ? mainConfigPath : null;
};

module.exports = async configPath => {
	const gcPath = getConfigPath(configPath);
	if (!gcPath) {
		throw new Error('[git-user-local]: cannot find .gitconfig file on the system.');
	}

	const gcContent = await pReadFile(gcPath, 'utf8');
	return ini.parse(gcContent);
};
