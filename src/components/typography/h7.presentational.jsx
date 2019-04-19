import React from 'react';

const PresentCompo = props => {
    console.log(props);
    return (
        <h7 {...props}>{ props.children }</h7>
    );
}

export default PresentCompo;