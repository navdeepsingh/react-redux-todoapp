import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  const input = React.createRef()

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.current.value.trim()) {
            return;
          }
          dispatch(addTodo(input.current.value))
        }}>
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo