import React, {ButtonHTMLAttributes} from 'react'
import cs from 'classnames'
import styles from './button.module.scss'


export interface IButton extends  ButtonHTMLAttributes<HTMLButtonElement> {
    /** Choose between primary and secondary styling. */
    variant?: 'primary' | 'secondary';
}


export const Button = ({children, variant='primary', ...rest} : IButton) => {
    return (
        <button className={cs(styles.base, styles[variant])} {...rest}>
            {children}
        </button>
    )
}
