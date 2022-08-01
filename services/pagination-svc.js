import axios from 'axios';
import { API_URL } from '@/config/index';

const paginationSvc = async (model) => {
	console.log(`Starting paginationSvc for ${model}`);

	const url = `${API_URL}/api/${model}`;
	try {
		const cmsResponse = await axios.get(url).then((response) => response.data);
		return cmsResponse;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export default paginationSvc;
