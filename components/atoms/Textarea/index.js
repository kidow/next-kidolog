import './index.scss'

const Textarea = ({ ...rest }) => {
  return <textarea autoCapitalize="off" autoComplete="off" {...rest} />
}

export default Textarea
