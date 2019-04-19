import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h4 {...props}>{ props.children }</h4>
    );
}

export default PresentCompo;