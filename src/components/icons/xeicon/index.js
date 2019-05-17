import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    rotate: PropTypes.number,
    flip: PropTypes.string,
    fw: PropTypes.bool,
    spin: PropTypes.bool,
}

const  defaultProps = {
    name: "xpressengine",
    size: 1,
    rotate: 0,
    fw: false,
    spin: false,
}

const Icon = (props) => {

    let cn = "";
    cn += props.name.includes("xi-") ? props.name : "xi-" + props.name;
    if( props.size > 1 ) {
        cn += " ";
        const sizeInt = Math.floor(props.size);
        if( sizeInt < 2 ) cn += "xi-x";
        else if ( sizeInt < 5 ) cn += `xi-${sizeInt}x`
        else cn += "xi-5x";
    }
    if( props.rotate===90 || props.rotate===180 || props.rotate===270 ){
        cn += " xi-rotate-"+props.rotate;
    }
    if( props.flip ){
        if( props.flip === "h" ) cn += " xi-flip-horizontal";
        else if( props.flip === "v" ) cn += " xi-flip-vertical"
    }
    if( props.spin ) cn += " xi-spin";
    if( props.fw ) cn += " xi-fw";


    return(
        <i className={ cn }></i>
    );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;