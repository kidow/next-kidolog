import './index.scss'

const IconButton = ({ IconName, onClick, children, ...rest }) => (
  <div className="icon-button" onClick={onClick}>
    <IconName className="icon" {...rest} />
    {children}
  </div>
)

export default IconButton
