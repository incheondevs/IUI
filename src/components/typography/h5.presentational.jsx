import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h5 {...props}>{ props.children }</h5>
    );
}

export default PresentCompo;