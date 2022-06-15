import React, { Component } from 'react'
import Button from './Button.js'
import DeleteButton from './DeleteButton.js'
import DisplayUserData from './DisplayUserData.js'

class SingleTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: [],
            showUserInfo: false
        }
    }

    componentDidMount() {

        if (this.props.singleTodo.userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${this.props.singleTodo.userId}`)
                .then((res) => res.json())
                .then((data) => this.setState({ userInfo: data }))
        }
    }

    render() {

        const displayUserData = () => {
            if (this.state.userInfo.name) {
                return this.setState({ showUserInfo: !this.state.showUserInfo })
            }

            alert('Sorry! No user data found')

        }
        return (
            <>
                {!this.state.showUserInfo ?
                    <>
                        <div className='listItem'>
                            <div>
                                <h2 className='todoItem'>{this.props.singleTodo.title} <br />
                                    <div className='todoUserName' onClick={displayUserData}>username: {this.state.userInfo.username || 'n/a'}</div></h2>
                            </div>
                            <DeleteButton id={this.props.singleTodo.id} deleteTodo={this.props.deleteTodo} />
                        </div>
                        <Button goBackToHomePage={this.props.goBackToHomePage} /> </> : <DisplayUserData userData={this.state.userInfo} currentTodoId={this.props.singleTodo.id} displayUserData={displayUserData} />
                }

            </>
        )
    }
}

export default SingleTodo