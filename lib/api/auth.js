import axios from 'axios'

export const checkEmailExists = email =>
  axios.get(`/auth/exists/email/${email}`)
export const checkNicknameExists = nickname =>
  axios.get(`/auth/exists/nickname/${nickname}`)

export const localRegister = ({ email, nickname, password }) =>
  axios.post('/prv/auth/register/local', { email, nickname, password })
export const locallogin = ({ email, password }) =>
  axios.post('/prv/auth/login/local', { email, password })

export const socialRegister = ({ nickname, provider, accessToken }) =>
  axios.post(`/prv/auth/register/${provider}`, { nickname, accessToken })
export const socialLogin = ({ provider, accessToken }) =>
  axios.post(`/prv/auth/login/${provider}`, { accessToken })

export const check = () => axios.get('/auth/check')
export const logout = () => axios.delete('/prv/auth/logout')
