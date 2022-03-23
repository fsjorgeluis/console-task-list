const fs = require('fs');

const filePath = 'src/data/tasks.json';

const saveData = (data) => {
	fs.writeFileSync(filePath, JSON.stringify(data));
};

const readData = () => {
	if (!fs.existsSync(filePath)) return null;

	const info = fs.readFileSync(filePath, { encoding: 'utf-8' });
	const data = JSON.parse(info);

	return data;
};

module.exports = {
	saveData,
	readData,
};
