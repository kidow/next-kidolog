import './index.scss'
import { Button, Logo } from 'components/atoms'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { check } from 'store/auth'

const Header = _ => {
  const { logged } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(_ => {
    dispatch(check())
  }, [])

  return (
    <div className="header__container">
      <div className="header__content">
        <Logo />
        {logged && (
          <Link href="/editor">
            <Button>새 포스트</Button>
          </Link>
        )}
      </div>
      <div className="header__divider" />
    </div>
  )
}

export default Header
