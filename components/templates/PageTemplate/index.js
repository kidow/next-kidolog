import './index.scss'
import { Footer, Header } from 'components/organisms'

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default PageTemplate
