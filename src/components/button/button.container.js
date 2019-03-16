import React, { Component } from 'react';
import Button from './button.presentational';

let test = "Hello World";

function ButtonWrapper(data, WrapperComponent) {
    //data 처리 과정, 통신을 통해서 받아온 데이터를 전달해준다던지
    // console.log(props);
    return class extends Component {
        render() {
            return (
                <WrapperComponent {...data}></WrapperComponent>
            )
        }
    }
    // return <WrapperComponent {...props} ></WrapperComponent>
}

// export let _Button = ButtonWrapper({ test })(Button);
export default ButtonWrapper({ test }, Button);;