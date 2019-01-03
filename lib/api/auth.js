import axios from 'axios'

export const login = password => axios.post('/prv/auth/login', { password })
export const check = () => axios.get('/auth/check')
