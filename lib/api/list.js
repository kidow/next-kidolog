import axios from 'axios'
import queryString from 'query-string'

export const getList = ({ tag, search }) =>
  axios.get(`/posts/?${queryString.stringify({ tag, search })}`)
export const nextList = url => axios.get(url)
export const tagList = tag => axios.get(`/posts/tag=${tag}`)
