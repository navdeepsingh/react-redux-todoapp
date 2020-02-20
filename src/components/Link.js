import React from 'react'
import PropTypes from 'prop-types'
const Link = ({ active, children, onClick, filter }) => (
  <button
    onClick={onClick}
    className={active ? 'active' : ''}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children} : {filter}
  </button>
)
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Link