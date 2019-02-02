import axios from 'axios'

export const checkStatus = () => axios.get('/user/check')
export const logout = () => axios.delete('/prv/user/logout')
