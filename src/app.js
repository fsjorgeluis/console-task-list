require('colors');

const {
	inquirerMenu,
	pauseMenu,
	readInput,
	removeMenu,
	confirmInput,
} = require('./libs/inquirer');
const { saveData, readData } = require('./libs/manage');
const TaskList = require('./services/taskList');

const main = async () => {
	let opt = '';
	const tasks = new TaskList();
	const taskJSON = readData();

	if (taskJSON) {
		tasks.getTasks(taskJSON);
	}

	do {
		opt = await inquirerMenu();

		switch (opt) {
			case 1:
				const desc = await readInput('Description:');
				tasks.addTask(desc);
				break;

			case 2:
				tasks.showTasks();
				break;

			case 3:
				tasks.showTaskByStatus(true);
				break;

			case 4:
				tasks.showTaskByStatus(false);
				break;

			case 6:
				const id = await removeMenu(tasks.taskList);
				if (id !== 0) {
					const ok = await confirmInput('Are you sure?');
					if (ok) {
						tasks.taskToDelete(id);
						console.log('Task removed successfully!');
					}
				}
				break;
		}

		saveData(tasks.taskList);

		if (opt !== 0) await pauseMenu();
	} while (opt !== 0);
};

main();
