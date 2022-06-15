import React from 'react';

class Button extends React.Component {
    render() {
        const handleGoBack = () => {
            this.props.goBackToHomePage()
        }
        return (
            <button className="btn" onClick={handleGoBack}>Back Home</button>
        )
    }
}
export default Button