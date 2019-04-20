import React, { Component } from "react";

class Label extends Component {
    constructor(props) {
        super(props);

        this.type = props.type;
    }

    render() {
        return (
            <div>
                <label>{this.type}</label>
            </div>
        )
    }
}

export default Label;