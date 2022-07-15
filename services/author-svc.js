import contentSvc from './content-svc';

const getAuthors = async () => {
	console.info('Getting authors');
	let authors = await contentSvc('authors');
	console.log('authors = ' + authors);
	return authors;
};

export default getAuthors;
