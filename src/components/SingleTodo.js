import React, { Component } from 'react'
import Button from './Button.js'
import DeleteButton from './DeleteButton.js'

class SingleTodo extends Component {
    render() {
        return (
            <>

                <div className='listItem'>
                    <h2 className='todoItem'>{this.props.singleTodo.title}</h2>
                    <DeleteButton id={this.props.singleTodo.id} deleteTodo={this.props.deleteTodo} />
                </div>
                <Button goBackToHomePage={this.props.goBackToHomePage} />
            </>
        )
    }
}

export default SingleTodo