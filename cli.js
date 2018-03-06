#!/usr/bin/env node
'use strict';
const meow       = require('meow');
const getStdin   = require('get-stdin');
const lexisCount = require('lexis-count');

const cli = meow(`
	Usage
	  ~ ❯❯❯ lexis <text>
	  ~ ❯❯❯ cat <file> | lexis
	  ~ ❯❯❯ echo <text> | lexis
	Example
	  ~ ❯❯❯ lexis 'Lorem ipsum dolor sit amet'
	  5
`);

const input = cli.input[0];

if (!input && process.stdin.isTTY) {
	console.log('Specify something to retrieve the number of words it contains');
	process.exit(1);
}

if (input) {
	console.log(lexisCount(input));
} else {
	getStdin().then(stdin => {
		console.log(lexisCount(stdin));
	});
}