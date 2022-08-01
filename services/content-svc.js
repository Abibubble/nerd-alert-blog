import axios from 'axios';
import { API_URL } from '@/config/index';

const contentSvc = async (model) => {
	console.log(`Starting contentSvc for ${model}`);

	const url = `${API_URL}/api/${model}`;
	console.log(url);
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
