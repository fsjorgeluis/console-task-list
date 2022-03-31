require('colors');
const inquirer = require('inquirer');

const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'Make your choice!',
		choices: [
			{ value: 1, name: `${'1.'.green} Add Task` },
			{ value: 2, name: `${'2.'.green} Get all tasks` },
			{ value: 3, name: `${'3.'.green} Get all finished Tasks` },
			{ value: 4, name: `${'4.'.green} Get all unfinished tasks` },
			{ value: 5, name: `${'5.'.green} Mark task as done` },
			{ value: 6, name: `${'6.'.green} Remove task` },
			{ value: 0, name: `${'0.'.green} Exit` },
		],
	},
];

const inquirerMenu = async () => {
	console.clear();

	console.log('============================='.green);
	console.log('        My TaskBoard!'.green);
	console.log('=============================\n'.green);

	const { option } = await inquirer.prompt(questions);
	return option;
};

const pauseMenu = async () => {
	console.log('\n');
	return await inquirer.prompt([
		{
			type: 'input',
			name: 'pause',
			message: `Press ${'ENTER'.green} to continue`,
		},
	]);
};

const readInput = async (message) => {
	const { description } = await inquirer.prompt([
		{
			type: 'input',
			name: 'description',
			message,
			validate(value) {
				if (value.length === 0) throw 'You must describe an activity';
				return true;
			},
		},
	]);

	return description;
};

const removeMenu = async (tasks = []) => {
	const choices = tasks.map((task, index) => {
		const taskId = `${index + 1}.`.green;

		return {
			value: task.id,
			name: `${taskId} ${task.description}`,
		};
	});

	// unshift or push thats the question XD
	choices.push({ value: 0, name: `${'0.'.green} Back` });

	const questions = [
		{
			type: 'list',
			name: 'id',
			message: 'Delete',
			choices,
		},
	];

	const { id } = await inquirer.prompt(questions);
	return id;
};

const confirmInput = async (message) => {
	const questions = [
		{
			type: 'confirm',
			name: 'ok',
			message,
		},
	];

	const { ok } = await inquirer.prompt(questions);

	return ok;
};


const taskCheckList = async (tasks = []) => {
	const choices = tasks.map((task, index) => {
		const taskId = `${index + 1}.`.green;

		return {
			value: task.id,
			name: `${taskId} ${task.description}`,
			checked: (task.completedAt) ? true : false
		}
	});

	const questions = [
		{
			type: 'checkbox',
			name: 'ids',
			message: 'Selecciones',
			choices
		}
	];

	const { ids } = await inquirer.prompt(questions);
	return ids;
};

module.exports = {
	inquirerMenu,
	pauseMenu,
	readInput,
	removeMenu,
	confirmInput,
	taskCheckList,
};
