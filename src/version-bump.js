// Utility to upgrade package.json version

const fs = require('fs');
const { titleCase } = require('voca');
require('colors');

const { box } = require('./utils/cli');

const UPGRADE_MODE = { PATCH: 'patch',
	MINOR: 'minor',
	MAJOR: 'major'
};

const UPGRADE_MODES = [UPGRADE_MODE.PATCH, UPGRADE_MODE.MINOR, UPGRADE_MODE.MAJOR];

const UPGRADE = process.env.UPGRADE && (UPGRADE_MODES.includes(process.env.UPGRADE.toLowerCase()))? process.env.UPGRADE : UPGRADE_MODE.PATCH;

let file = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));
let oldVersion = file.version;
let [major, minor, patch] = oldVersion.split('.').map(n => parseInt(n, 10));

switch (UPGRADE) {
	case UPGRADE_MODE.MINOR: minor++; break;
	case UPGRADE_MODE.MAJOR: major++; break;
	default: /* PATCH */ patch++;
}

let version = [major, minor, patch].join('.');
file = JSON.stringify({ ...file, version }, null, '\t') + '\n';

fs.writeFileSync('./package.json', file);

let message = `⏫ ${titleCase(UPGRADE)} ⏫ \n🎉 upgrade from version 🎉\n${oldVersion} 👉 ${version} 🎉 `;

box({ message });

