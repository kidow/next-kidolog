import './index.scss'
import { Input } from 'components/atoms'
import Router from 'next/router'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePassword, login } from 'store/auth'

const Login = _ => {
  const { password, logged } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onChangePassword = useCallback(e =>
    dispatch(changePassword(e.target.value))
  )

  const onLogin = useCallback(async () => {
    try {
      await dispatch(login(password))
      Router.push('/')
    } catch (err) {
      alert(err.response.data.message)
      console.log(err)
    }
  })

  const onKeyPress = useCallback(e => e.key === 'Enter' && onLogin())

  useEffect(_ => {
    if (logged) Router.push('/')
  }, [])

  return (
    <div className="login__container">
      <div className="login__box">
        <h2>로그인</h2>
        <div className="input">
          <Input
            onChange={onChangePassword}
            value={password}
            placeholder="비밀번호 입력"
            type="password"
            autoFocus
            onKeyPress={onKeyPress}
            theme="login"
          />
        </div>
      </div>
    </div>
  )
}

export default Login
