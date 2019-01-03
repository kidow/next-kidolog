import './index.scss'

const Tag = ({ children, ...rest }) => {
  return (
    <div className="tag__container" {...rest}>
      {children}
    </div>
  )
}

export default Tag
