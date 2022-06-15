import React, { Component } from 'react'

export class DeleteButton extends Component {
    render() {
        const handleDelete = (e) => {
            this.props.deleteTodo(e)
        }
        return (

            <button className='deleteX' id={this.props.id} onClick={handleDelete}>Delete</button>

        )
    }
}

export default DeleteButton