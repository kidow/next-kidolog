import './index.scss'

const Input = ({ theme, ...rest }) => {
  return (
    <input
      className={theme}
      autoComplete="off"
      autoCapitalize="off"
      {...rest}
    />
  )
}

export default Input
