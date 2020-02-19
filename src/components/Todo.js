import React from "react"
import PropTypes from 'prop-types'

const Todo = ({ text, completed, onClick }) => {
  return (
    <li onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : '' }}>
      {text}
    </li>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Todo;