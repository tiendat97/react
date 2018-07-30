import { addTodo } from '../actions/index'
import React from 'react'
import { connect } from 'react-redux'

const AddTodo = ({ dispatch }) => {
    let inputTask;
    return (
        <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!inputTask.value.trim()) {
              return
            }
            dispatch(addTodo(inputTask.value))
            inputTask.value = ''
            }}
        >
            <input ref={myInput => inputTask = myInput} />
            <button type="submit">
                Create Task
            </button>
        </form>
         </div>
    )
  }
  
export default connect()(AddTodo)
  