import axios from 'axios'

export const writeComment = data => axios.post('/prv/comments', data)
export const getComments = postId => axios.get(`/comments/${postId}`)
export const updateComment = ({ _id, content }) =>
  axios.patch(`/prv/comments/${_id}`, { content })
export const removeComment = id => axios.delete(`/prv/comments/${id}`)
