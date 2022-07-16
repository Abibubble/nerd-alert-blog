import axios from 'axios';

let cms = 'http://localhost:1337';

const contentSvc = async (model) => {
	console.log('Starting contentSvc');
	let url = `${cms}/api/${model}`;

	let response = await axios.get(url);

	if (response.status === 200) {
		let content = await response.data.data;
		console.log('content = ' + content);
		return content;
	}
	console.log('Oops');
	return null;
};

export default contentSvc;
