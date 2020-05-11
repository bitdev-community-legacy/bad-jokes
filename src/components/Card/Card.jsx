import React from 'react'
import styles from './Card.module.css'
import classNames from 'classnames';
import Text from '../Text'

const Card = ({size, children}) => {
    return (
        <div className={classNames(styles.card, styles[size])}>
            <Text size='md'>
                {children}
            </Text>
        </div>
    )
}

export default Card;