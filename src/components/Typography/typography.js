import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const propTypes = {
    inline: PropTypes.bool, 
    bold: PropTypes.bool, 
    strike: PropTypes.bool, 
    scaleLevel: PropTypes.number,
    headerLevel: PropTypes.number,
}

const  defaultProps = {
    inline: false,
    bold: false,
    strike: false,
    scaleLevel: 1,
    headerLevel: null,
}

const styles = {
    typography: 'iui__typography__wrapper',
    bold: 'iui__typography__bold',
    inline: 'iui__typography__inline',
    strike: 'iui__typography__strike',
    scale: (level) => `iui__typography__scale${level}`,
}

const Typography = (props) => {
    const { inline, bold, strike, scaleLevel, headerLevel, ...otherAttribute } = props;
    
    const TagName = headerLevel !== null ? `h${headerLevel}` : 'p';
    let styleCollection = '';

    if (inline)  styleCollection += `${styles.inline} `;
    if (bold)    styleCollection += `${styles.bold} `;
    if (strike)  styleCollection += `${styles.strike} `;

    return (
        <div className={`${styles.typography} ${styles.scale(scaleLevel)}`}>
            <TagName className={styleCollection} {...otherAttribute}>{props.children}</TagName>
        </div>
    );
}

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;