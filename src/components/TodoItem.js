import React from 'react'
import DeleteButton from './DeleteButton'

class TodoItem extends React.Component {
    render() {

        const handleSetSingleTodo = (e) => {
            this.props.setSingleTodo(e)
        }

        return (

            <div className='listItem'>

                <h2 className="todoItem" id={this.props.elem.id} onClick={handleSetSingleTodo}>{this.props.elem.title}</h2>

                <DeleteButton id={this.props.elem.id} deleteTodo={this.props.deleteTodo} />
            </div>

        )
    }
}

export default TodoItem