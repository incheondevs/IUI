import React from 'react';

const PresentCompo = props => {
    // console.log(props);
    const { type: DynamicTag, ...restProps } = props;

    return (
        <DynamicTag {...restProps}>{ restProps.children }</DynamicTag>
    );
}

export default PresentCompo;