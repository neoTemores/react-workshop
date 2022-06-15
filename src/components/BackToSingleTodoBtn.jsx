import React from "react";

export class BackToSingleTodoBtn extends React.Component {

    render() {

        return (
            <button className="backToSingleTodoBtn" onClick={() => this.props.displayUserData()}>Back to Single Todo</button>
        )
    }
}

export default BackToSingleTodoBtn