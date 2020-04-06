const {resolve} = require('path');
const test = require('ava');
const m = require('../src');

test('should return git credential correctly', async t => {
	const info = await m(resolve(__dirname, 'fixture'));
	t.is(info.user.name, 'Phi');
	t.is(info.user.email, 'awesome@unicorn.com');
});

test('should throw when not found', t => {
	const err = t.throws(() => m('nowhere'));
	t.is(err.message, '[git-user-local]: cannot find .gitconfig file on the system.');
});

