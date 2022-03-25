const Task = require('./task');

class TaskList {
	constructor() {
		this._tastkList = {};
	}

	get taskList() {
		const list = [];

		Object.keys(this._tastkList).forEach((key) =>
			list.push(this._tastkList[key])
		);

		return list;
	}

	addTask(desc = '') {
		const task = new Task(desc);
		const now = new Date();
		task.createdAt = now;
		task.updatedAt = now;
		this._tastkList[task.id] = task;
	}

	getTasks(tasks = []) {
		tasks.forEach((task) => {
			this._tastkList[task.id] = task;
		});
	}

	showTasks() {
		console.log();

		this.taskList.forEach((task, index) => {
			const taskId = `${index + 1}.`.green;

			console.log(
				`${taskId} ${task.description} :: ${
					task.completedAt !== null ? 'Completed'.green : 'Pending'.red
				}`
			);
		});
	}

	showTaskByStatus(completed = true) {
		console.log();

		let index = 0;

		this.taskList.forEach((task) => {
			if (completed) {
				if (task.completedAt !== null) {
					console.log(
						`${(index + 1 + '.').green} ${task.description} :: ${
							'Completed'.green
						} At ${new Date(task.completedAt).toLocaleString()}`
					);
				}
			} else {
				if (task.completedAt === null) {
					console.log(
						`${index + 1 + '.'.green} ${task.description} :: ${'Pending'.red}`
					);
				}
			}
		});
	}
}

module.exports = TaskList;
