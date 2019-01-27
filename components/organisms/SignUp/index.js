import './index.scss'
import { Input, Label, Button, IconButton } from 'components/atoms'
import { FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

export default () => (
  <div className="signup__container">
    <div className="signup__title">회원가입</div>
    <div>
      <Label>이메일</Label>
      <Input theme="auth" placeholder="이메일" />
    </div>
    <div>
      <Label>비밀번호</Label>
      <Input theme="auth" placeholder="비밀번호" />
    </div>
    <Button>회원가입</Button>
    <IconButton IconName={FaFacebook} size={15} theme="facebook">
      페이스북
    </IconButton>
    <IconButton IconName={FaTwitter} size={15} theme="google">
      구글
    </IconButton>
    <IconButton IconName={FaGithub} size={15} theme="github">
      깃허브
    </IconButton>
  </div>
)
