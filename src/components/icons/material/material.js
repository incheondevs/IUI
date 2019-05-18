import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.number.isRequired

}

const defaultProps = {
    name: 'face'
}

const Material = (props) => {
    const { name } = props;
    let className = 'material-icons';

    return (
        <i className={className}>{name}</i>
    )
}

Material.propTypes = propTypes;
Material.defaultProps = defaultProps;

export default Material;