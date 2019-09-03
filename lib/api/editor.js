import axios from 'axios'

export const writePost = data => axios.post('/prv/posts', data)
export const getPost = id => axios.get(`/posts/${id}`)
export const imageUpload = formData => axios.post('/prv/posts/image', formData)
export const thumbnailUpload = formData =>
  axios.post('/prv/posts/thumbnail', formData)
