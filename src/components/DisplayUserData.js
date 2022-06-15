import React from 'react'
import BackToSingleTodoBtn from './BackToSingleTodoBtn'

export class DisplayUserData extends React.Component {
    render() {

        return (
            <div className='userData'>
                <h3> username: {this.props.userData.username}</h3>
                <h3> name: {this.props.userData.name}</h3>
                <h3> email: {this.props.userData.email}</h3>
                <h3> location: {this.props.userData.address.city}, USA</h3>
                <BackToSingleTodoBtn currentTodoId={this.props.currentTodoId} displayUserData={this.props.displayUserData} />
            </div >
        )
    }

}

export default DisplayUserData