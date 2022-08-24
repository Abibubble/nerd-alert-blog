import contentSvc from './content-svc';

const videoSvc = async (query) => {
	return contentSvc('videos', query);
};

export default videoSvc;
