import React, { Component } from 'react'

export class AddTodoButton extends Component {
    render() {
        const handleShowForm = () => {
            this.props.toggleShowAddNewTodoForm()
        }
        return (
            <button className='addNewTaskButton' onClick={handleShowForm} style={{
                backgroundColor: this.props.color
            }}>{this.props.text}</button>
        )
    }
}


export default AddTodoButton