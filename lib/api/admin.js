import axios from 'axios'

export const login = password => axios.post('/prv/admin/login', { password })
export const check = () => axios.get('/admin/check')
