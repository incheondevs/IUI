import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h3 {...props}>{ props.children }</h3>
    );
}

export default PresentCompo;