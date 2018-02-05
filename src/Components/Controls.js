import React from 'react';

export default class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(e) {
        e.preventDefault();
        this.props.handleReset();
    }

    render() {
        return (
            <div className="controls">
                <form>
                    <button onClick={this.handleReset}>Reset</button>
                </form>
            </div>
        );
    }
}