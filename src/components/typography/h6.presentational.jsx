import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h6 {...props}>{ props.children }</h6>
    );
}

export default PresentCompo;