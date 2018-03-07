import test from 'ava';
import execa from 'execa';
import lexisCount from 'lexis-count';

test('string', async t => {
	const {stdout} = await execa('./cli.js', ['foo bar baz']);
	t.is(parseInt(stdout), lexisCount('foo bar baz'));
});

test('string with whitespaces', async t => {
	const {stdout} = await execa('./cli.js', ['  foo bar     baz ']);
	t.is(parseInt(stdout), lexisCount('  foo bar     baz '));
});

test('string with non-english characters', async t => {
	const {stdout} = await execa('./cli.js', ['είμαι Έλληνας!']);
	t.is(parseInt(stdout), lexisCount('είμαι Έλληνας!'));
});