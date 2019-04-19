import React from 'react';
// import PropTypes from "prop-types";

const PresentCompo = props => {
    // console.log(props);
    return (
        <h1 {...props}>{ props.children }</h1>
    );
}

// PresentCompo.propTypes = {
// };
// PresentCompo.defaultProps = {
// };


export default PresentCompo;