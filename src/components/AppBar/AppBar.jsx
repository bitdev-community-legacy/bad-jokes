import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './AppBar.module.css';

export default class AppBar extends Component {

    static Item = ({path, children}) => {
        return <li><a href={path}><Text size='lg'>{`[${children}]`}</Text></a></li>
    }

    static Logo = ({children}) => {
        return (
            <div className={styles.logo}>
                {children}
            </div>
        )
    }

    render() {
        return (
            <div className={styles.app_bar}>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}



AppBar.Item.propTypes = {
    /** Menu items (each with 'path' and 'name') */
    items: PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

