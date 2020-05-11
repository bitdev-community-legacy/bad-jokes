import React from 'react'
import styles from './Text.module.css';
import classNames from 'classnames';

const Text = ({size, children}) => {
    return (
        <div className={classNames(styles.text, styles[size])}>
            {children}
        </div>
    )
}

Text.defaultProps = {
    size: 'md'
  };

export default Text;