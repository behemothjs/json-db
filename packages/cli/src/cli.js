#! /usr/bin/env node
import process from 'node:process';

const [command, subCommand, ...args] = process.argv.slice(2);

switch (command) {
	case 'make': {
		switch (subCommand) {
			case 'model': {
				const [name] = args;
				console.log(`Creating model ${name}`);
				break;
			}

			default: {
				console.log(`%c
JSON DB CLI

Usage: db make <command> [options]

Commands:
	model <name>  Create a new model
`,
				'color: #00ff00;',
				);
			}
		}

		break;
	}

	default: {
		console.log(`
%cJSON DB CLI%c

Usage: cli <command> [options]
`,
		'color:green',
		);
	}
}
