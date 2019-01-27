import './index.scss'
import { Input, Label, Button, IconButton } from 'components/atoms'
import {
  FaFacebook,
  FaGoogle,
  FaGithub,
  FaKickstarter,
  FaNeos
} from 'react-icons/fa'
import Link from 'next/link'

export default ({ error }) => (
  <div className="login__container">
    <Link href="/">
      <div className="login__title">Kidolog</div>
    </Link>
    <div>
      <Label>이메일</Label>
      <Input theme="auth" placeholder="이메일" />
    </div>
    <div>
      <Label>비밀번호</Label>
      <Input theme="auth" placeholder="비밀번호" type="password" />
    </div>
    {error && <div className="error__container">{error}</div>}
    <Button theme="auth">로그인</Button>
    <IconButton IconName={FaFacebook} size={25} theme="facebook">
      페이스북
    </IconButton>
    <IconButton IconName={FaGoogle} size={25} theme="google">
      구글
    </IconButton>
    <IconButton IconName={FaGithub} size={25} theme="github">
      깃허브
    </IconButton>
    <IconButton IconName={FaKickstarter} size={25} theme="kakao">
      카카오
    </IconButton>
    <IconButton IconName={FaNeos} size={25} theme="naver">
      네이버
    </IconButton>
    <Link href="/signup">
      <div className="link__container">회원가입</div>
    </Link>
  </div>
)
