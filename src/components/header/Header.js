import React, { Component } from 'react';

function Header(props) {
    // props setting
    const { 
        content
        , tagName
    } = props;

    const  TagName = props.tagName;
    return (
        <TagName>
            {content}
        </TagName>
    )
} 

export default Header;