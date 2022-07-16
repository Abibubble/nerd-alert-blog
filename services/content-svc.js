import axios from 'axios';

const cms = 'http://localhost:1337';

const contentSvc = async (model) => {
	console.log(`Starting contentSvc for ${model}`);

	const url = `${cms}/api/${model}`;
	try {
		const cmsResponse = await axios
			.get(url)
			.then((response) => response.data.data);
		return cmsResponse;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export default contentSvc;
