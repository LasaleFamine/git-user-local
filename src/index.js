'use strict';

const path = require('path');
const {existsSync, readFile} = require('fs');
const {homedir} = require('os');
const ini = require('ini');

const getConfigPath = configPath => {
	const mainConfigPath = path.resolve(configPath || homedir(), '.gitconfig');
	return existsSync(mainConfigPath) ? mainConfigPath : null;
};

module.exports = configPath => {
	const gcPath = getConfigPath(configPath);
	if (!gcPath) {
		throw new Error('[git-user-local]: cannot find .gitconfig file on the system.');
	}

	return new Promise((resolve, reject) =>
		readFile(gcPath, 'utf8', (err, gcContent) =>
			err ? reject(err) : resolve(ini.parse(gcContent))));
};
