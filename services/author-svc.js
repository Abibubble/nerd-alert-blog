import contentSvc from './content-svc'

const authorSvc = async query => {
  return contentSvc('authors', query)
}

export default authorSvc
