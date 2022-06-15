import React from 'react';

class Button extends React.Component {
    render() {
        const handleGoBack = () => {
            this.props.goBackToHomePage()
        }
        return (
            <button className="btn" onClick={handleGoBack}>Back</button>
        )
    }
}
export default Button