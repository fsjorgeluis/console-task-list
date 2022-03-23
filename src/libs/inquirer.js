require('colors');
const inquirer = require('inquirer');

const questions = [
	{
		type: 'list',
		name: 'option',
		message: 'Make your choice!',
		choices: [
			{ value: 1, name: '1. Add Task' },
			{ value: 2, name: '2. Get all tasks' },
			{ value: 3, name: '3. Get all finished Tasks' },
			{ value: 4, name: '4. Get all unfinished tasks' },
			{ value: 5, name: '5. Mark task as done' },
			{ value: 6, name: '6. Remove task' },
			{ value: 0, name: '0. Exit' },
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

module.exports = {
	inquirerMenu,
	pauseMenu,
};
