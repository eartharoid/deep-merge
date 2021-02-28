const test = require('ava');
const isEqual = require('lodash.isequal');
const merge = require('../');

test('merge 1', t => {
	let one = {
		thing: 'original',
		some_things: {
			thing1: {
				name: 'a thing',
				details: {
					weight: 0
				}
			}
		}
	};

	let two = {
		thing: 'overridden',
		some_things: {
			thing1: {
				name: 'A thing',
				details: {
					weight: 17.4,
					material: 'plastic'
				}
			}
		}
	};

	let expected = {
		thing: 'overridden',
		some_things: {
			thing1: {
				name: 'A thing',
				details: {
					weight: 17.4,
					material: 'plastic'
				}
			}
		}
	};

	let merged = merge(one, two);

	console.log('expected', require('util').inspect(expected, {
		depth: Infinity,
		colors: true,
		compact: false,
	}));

	console.log('merged', require('util').inspect(merged, {
		depth: Infinity,
		colors: true,
		compact: false,
	}));

	if (isEqual(merged, expected)) t.pass();
	else t.fail();
});

