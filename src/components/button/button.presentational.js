import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        // console.log(props);
        // console.log(props.test);

        this.test = props.test;
    }

    render() {
        return (
            <div>
                Test! {this.test};
            </div>
        )
    }
}

export default Button;