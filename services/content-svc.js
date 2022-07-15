import axios from 'axios';

let cms = 'http://localhost:1337';

export const contentSvc = (model) => {
	let url = `${cms}/api/${model}`;

	return axios.get(url).then((res) => {
		console.log('res.data.data = ' + res.data.data);
		return res;
	});
};

// const contentSvc = async (model) => {
// 	let url = `${cms}/api/${model}`;

// 	let response = await axios.get(url);
// 	if (response.status === 200) {
// 		let content = await response.data;
// 		console.log('content = ' + content);
// 		return content;
// 	}
// 	console.log('oops');
// 	return null;
// };

export default contentSvc;
