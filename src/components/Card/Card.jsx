import React from 'react'
import PropTypes, { any } from 'prop-types';
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

Card.defaultProps = {
    size: 'md'
}

Card.propTypes = {
    /** the card's width */
    size: PropTypes.oneOf(['fullWidth','md', 'sm']),
    /** the card's content */
    children: any
}

export default Card;