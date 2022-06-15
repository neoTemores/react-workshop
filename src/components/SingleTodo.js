import React, { Component } from 'react'
import Button from './Button.js'

class SingleTodo extends Component {
    render() {
        return (
            <>
                <h2 className='todoItem'>{this.props.singleTodo.title}</h2>
                <Button goBackToHomePage={this.props.goBackToHomePage} />
            </>
        )
    }
}

export default SingleTodo