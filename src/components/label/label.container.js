import React, { Component } from "react";
import Label from "./label.presentational";

let text = "z";
function LabelWrapper(data, WrapperComponet) {
    
    return class extends Component {
        constructor(props){
            super(props)
        }
        render() {
            console.log(this.props);
            
            return (
                <WrapperComponet {...data}></WrapperComponet>
            )
        }
    }  
}

export default LabelWrapper({ text }, Label );