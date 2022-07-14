import axios from 'axios';

let cms = 'http://localhost:1337';

const contentSvc = async (model) => {
	let url = `${cms}/api/${model}`;
	let response = await axios.get(url, { validateStatus: () => true });
	if (response.status === 200) {
		let content = await response.data;
		return content;
	}
	return null;
};

export default contentSvc;
