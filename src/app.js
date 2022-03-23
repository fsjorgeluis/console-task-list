require('colors');

const { inquirerMenu, pauseMenu } = require('./libs/inquirer');

console.clear();

const main = async () => {
	let opt = '';

	do {
		opt = await inquirerMenu();
		if (opt !== 0) await pauseMenu();
	} while (opt !== 0);
};

main();
