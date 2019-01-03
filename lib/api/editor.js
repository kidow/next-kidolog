import axios from 'axios'

export const writePost = ({ title, markdown, tags, thumbnail }) =>
  axios.post('/prv/posts', { title, markdown, tags, thumbnail })
export const getPost = id => axios.get(`/posts/${id}`)
export const imageUpload = formData => axios.post('/prv/posts/image', formData)
export const thumbnailUpload = formData => axios.post('/prv/posts/thumbnail', formData)
