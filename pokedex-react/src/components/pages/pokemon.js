import React, { Component } from 'react';

class Pokemon extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>{this.props.match.params.topicId}</h3>
            </div>
        )
    }
}

export default Pokemon;