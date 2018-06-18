import React, { Component } from 'react';
import PropTypes from 'prop-types';

const
    container = {
        marginLeft: '40'
    };

const
    label = {
        fontWeight: 'bold',
        fontSize: '1.2rem'
    };

const
    value = {
        color: '#474747',
        position: 'absolute',
        left: '200'
    };

class MessageView extends Component {
    render() {
        console.log(this.props);
        const {message, color, height} = this.props;

        return(
            <div style={{border: `1px solid ${color}`, height: `${height}`}} className="container">
                <div className="from">
                    <span className="label">From: </span>
                    <span className="value">{message.from}</span>
                </div>
                <div className="status">
                    <span className="label">Status: </span>
                    <span className="value">{message.message}</span>
                </div>
                <div className="message">
                    <span className="label">Message: </span>
                    <span className="value">{message.status}</span>
                </div>
            </div>
        )
    }


}

// Mark message input parameter as required
MessageView.propTypes = {
    message: PropTypes.object.isRequired
}
export default MessageView;