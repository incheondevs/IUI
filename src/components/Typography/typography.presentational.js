import React from 'react';

import styles from './styles.scss';

const Presentational = (props) => {
    const { level = 1 } = props;
    
    const TagName = `h${level}`
    let levelStyle = `.iui__typography__wrapper`;

    return (
        <div className={levelStyle}>
            <TagName>{props.children}</TagName>
        </div>
    );
}

export default Presentational;