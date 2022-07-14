import contentSvc from './content-svc';

const getAuthors = async () => {
	console.info('Getting authors');
	let authors = await contentSvc('authors');
	return authors.data[0];
};

export default getAuthors;
