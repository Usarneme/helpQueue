import PropTypes from 'prop-types'

function Header(props) {
  return (
    <h2 style={{ margin: '22px', padding: '22px' }}>{props.title}</h2>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header