import axios from 'axios'

export const updatePost = ({ id, ...data }) =>
  axios.patch(`/prv/posts/${id}`, { ...data })
export const removePost = id => axios.delete(`/prv/posts/${id}`)
