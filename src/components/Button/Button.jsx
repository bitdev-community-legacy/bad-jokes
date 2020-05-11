import React from 'react'
import styles from './Button.module.css';

const Button = ({disabled, children, onClickMethod}) => {
    return (
        <button disabled={disabled} className={styles.button} onClick={onClickMethod}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    disabled: false
  };
  

  export default Button;
