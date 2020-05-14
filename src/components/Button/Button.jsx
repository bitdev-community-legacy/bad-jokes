import React from 'react'
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({disabled, children, onClickMethod, ...rest}) => {
    return (
        <button disabled={disabled} className={styles.button} onClick={onClickMethod} {...rest}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false
  };

Button.propTypes = {
    disabled : PropTypes.bool,
    /** the button label */
    children: PropTypes.any.isRequired,
    /** a function that handles the onClick event */
    onClickMethod: PropTypes.func
}

  export default Button;
