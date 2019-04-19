import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h2 {...props}>{ props.children }</h2>
    );
}

export default PresentCompo;