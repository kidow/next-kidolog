import './index.scss'

const IconButton = ({ IconName, onClick, children, ...rest }) => (
  <div className="icon-button" onClick={onClick}>
    <IconName {...rest} />
  </div>
)

export default IconButton
