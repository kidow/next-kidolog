import axios from 'axios'

export const localRegister = ({ email, nickname, password }) =>
  axios.post('/prv/auth/register/local', { email, nickname, password })
export const locallogin = password =>
  axios.post('/prv/auth/login/local', { password })

export const naverRegister = () => axios.post('/prv/auth/register/naver')
export const naverLogin = () => axios.post('/prv/auth/login/naver')

export const kakaoRegister = () => axios.post('/prv/auth/register/kakao')
export const kakaoLogin = () => axios.post('/prv/auth/login/kakao')

export const githubRegister = () => axios.post('/prv/auth/register/github')
export const githubLogin = () => axios.post('/prv/auth/login/github')

export const facebookRegister = () => axios.post('/prv/auth/register/facebook')
export const facebookLogin = () => axios.post('/prv/auth/login/facebook')

export const googleRegister = () => axios.post('/prv/auth/register/google')
export const googleLogin = () => axios.post('/prv/auth/login/google')

export const check = () => axios.get('/auth/check')
export const logout = () => axios.delete('/prv/auth/logout')
