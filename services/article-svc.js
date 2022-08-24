import contentSvc from './content-svc';

const articleSvc = async (query) => {
	return contentSvc('articles', query);
};

export default articleSvc;
