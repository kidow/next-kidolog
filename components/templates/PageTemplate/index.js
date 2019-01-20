import './index.scss'
import { Footer } from 'components/organisms'
import { HeaderContainer } from 'containers'
import './index.scss'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <HeaderContainer />
      {children}
      <Footer />
    </div>
  )
}

export default PageTemplate
