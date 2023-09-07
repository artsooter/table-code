import {install} from 'esinstall';
import {readFile} from 'fs/promises';

// const {install} = require('esinstall')
// const {readFile} = require('fs/promises')
const json = JSON.parse(
	await readFile(
		new URL('./package.json', import.meta.url)
	)
);

const excludeInstall = json.esinstall.excludeInstall;
const moduleList = Object.keys(json.dependencies).filter(key => !excludeInstall.includes(key))

console.log('esinstall loading ...')
await install(moduleList);
console.log('esinstall finished')
