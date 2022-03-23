const Task = require('./task');

class TaskList {
	constructor() {
		this._tastkList = {};
	}

	addTask(desc = '') {
		const task = new Task(desc);
		const now = new Date();
		task.createdAt = now;
		task.updatedAt = now;
		this._tastkList[task.id] = task;
	}
}

module.exports = TaskList;
