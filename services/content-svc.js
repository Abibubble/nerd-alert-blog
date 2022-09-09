import axios from 'axios';
import { API_URL } from '@/config/index';

const qs = require('qs');

const contentSvc = async (model, query) => {
	console.log(`Starting contentSvc for ${model}`);

	let url = `${API_URL}/api/${model}`;

	console.log(`Calling on ${url}`);

	if (query) {
		query = qs.stringify(query, { encodeValuesOnly: true });
		url += `?${query}`;
	}

	console.log(`Fetching results from ${url}`);

	try {
		const cmsResponse = await axios
			.get(url, {
				params: {
					populate: '*',
				},
			})
			.then((response) => response.data);
		return cmsResponse;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export default contentSvc;
