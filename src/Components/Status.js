import React from 'react';

export default class Status extends React.Component {
    render() {
        return (
            <div>
                <textarea className="status" readOnly value={this.props.text} />
            </div>
        );
    }
}