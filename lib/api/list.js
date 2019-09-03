import axios from 'axios'
import queryString from 'query-string'

export const getList = data =>
  axios.get(`/posts/?${queryString.stringify(data)}`)
export const nextList = url => axios.get(url)
export const tagList = tag => axios.get(`/posts/tag=${tag}`)
