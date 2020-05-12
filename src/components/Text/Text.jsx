import React from 'react'
import PropTypes from 'prop-types';
import styles from './Text.module.css';
import classNames from 'classnames';

const Text = ({size, color, children}) => {
    return (
        <div className={classNames(styles.text, styles[size], styles[color])}>
            {children}
        </div>
    )
}

Text.defaultProps = {
    size: 'md',
    color: 'regular'
  };

Text.propTypes = {
    /** the font size */
    size: PropTypes.oneOf(['x-lg','lg', 'md', 'sm']),
    /** the font's color */
    color: PropTypes.oneOf(['regular', 'muted'])
}


export default Text;