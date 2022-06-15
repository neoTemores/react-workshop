import React, { Component } from 'react'

export class NewTodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: null
        }
    }
    render() {

        const onSubmit = (e) => {
            e.preventDefault()
            this.props.postNewTodo(this.state.text)
        }
        return (
            <>
                <form className="newTodoForm" onSubmit={onSubmit}>
                    <label className='formLabel'>New Todo:</label>
                    <input className='inputBox' type='text' placeholder='Please enter a new Todo' onChange={(e) => this.setState({ text: e.target.value })}></input>

                    <input className='submitButton' type='submit' value="Save New Todo"></input>

                </form>
            </>
        )
    }
}

export default NewTodoForm