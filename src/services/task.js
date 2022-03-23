const { v4: uuidv4 } = require('uuid');

class Task {
	constructor(desc) {
		this.id = uuidv4();
		this.description = desc;
		this.completedAt = null;
		this.createdAt = null;
		this.updatedAt = null;
	}
}

module.exports = Task;
