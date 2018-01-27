import {resolve} from 'path';
import test from 'ava';
import m from './../src';

test('should return git credential correctly', async t => {
	const info = await m(resolve(__dirname, 'fixture'));
	t.is(info.user.name, 'Phi');
	t.is(info.user.email, 'awesome@unicorn.com');
});

test('should throw when not found', async t => {
	const err = await t.throws(m('nowhere'));
	t.is(err.message, '[git-user-local]: cannot find .gitconfig file on the system.');
});

