import contentSvc from './content-svc'

const categorySvc = async query => {
  return contentSvc('categories', query)
}

export default categorySvc
