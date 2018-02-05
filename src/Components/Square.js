import React from 'react';

export default class Square extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();

        this.props.handleClick(this.props.index);
    }

    render() {
        return (
        <div className="square">
            <button className={this.props.status} onClick={this.handleClick} />
        </div>
        );
    }
}