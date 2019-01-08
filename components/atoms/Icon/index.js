import PropTypes from 'prop-types'

const Icon = ({ Name, ...rest }) => <Name {...rest} />

Icon.propTypes = {
  Name: PropTypes.func
}

export default Icon
