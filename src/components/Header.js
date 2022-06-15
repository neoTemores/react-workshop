import React, { Component } from 'react'
import AddTodoButton from './AddTodoButton'

export class Header extends Component {
    render() {
        return (



            !this.props.currentState.singleTodo ?
                <> <h1 className='header'>{`List of ${this.props.currentState.todos.length} Todo's`}</h1>

                    <AddTodoButton toggleShowAddNewTodoForm={this.props.toggleShowAddNewTodoForm}
                        color={!this.props.currentState.showAddNewTodoForm ? 'green' : 'red'}
                        text={!this.props.currentState.showAddNewTodoForm ? 'Add new Todo' : 'Close'}
                    /> </> :
                <h1 className='header'>{`Todo # ${this.props.currentState.singleTodo.id}`}</h1>

        )
    }
}

export default Header