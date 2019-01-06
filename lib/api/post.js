import axios from 'axios'

export const getPost = id => axios.get(`/posts/${id}`)
export const updatePost = ({ id, title, markdown, tags, thumbnail }) =>
  axios.patch(`/prv/posts/${id}`, { title, markdown, tags, thumbnail })
export const removePost = id => axios.delete(`/prv/posts/${id}`)
