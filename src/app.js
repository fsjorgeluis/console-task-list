require('colors');

const { inquirerMenu, pauseMenu, readInput } = require('./libs/inquirer');
const TaskList = require('./services/taskList');

const main = async () => {
	let opt = '';
	const tasks = new TaskList();

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				const desc = await readInput('Description:');
				tasks.addTask(desc);
				break;

			case 2:
				console.log(tasks._tastkList);
				break;
		}

		if (opt !== 0) await pauseMenu();
	} while (opt !== 0);
};

main();
