import React from 'react';
import Button from './button.presentational';

let test = "Hello World";

let ButtonWrapper = (props)=> (WrapperComponent) => {
    //data 처리 과정, 통신을 통해서 받아온 데이터를 전달해준다던지
    // console.log(props);
    return <WrapperComponent {...props} ></WrapperComponent>
}
console.log(ButtonWrapper({ test }, Button));

// export let _Button = ButtonWrapper({ test })(Button);
export default ButtonWrapper({ test })(Button);