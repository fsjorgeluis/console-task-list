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
}

module.exports = TaskList;
