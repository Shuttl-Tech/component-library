// Utility to make a build commit with a version number

const fs = require('fs');
const { spawnSync } = require('child_process');

const { version } = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));

const options = {
	stdio: 'inherit'
};

spawnSync('git', ['add', '.'], options);
spawnSync('git', ['commit', '-m', `Build version ${version}.`, '--no-verify'], options);
