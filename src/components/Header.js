import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            !this.props.currentState.singleTodo ?
                <h1 className='header'>{`List of ${this.props.currentState.todos.length} Todo's`}</h1> :
                <h1 className='header'>{`Todo # ${this.props.currentState.singleTodo.id}`}</h1>

        )
    }
}

export default Header