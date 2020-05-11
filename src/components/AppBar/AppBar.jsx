import React from 'react';
import styles from './AppBar.module.css';
import Text from '../Text'

const AppBar = ({items}) => {
    return (
        <div className={styles.app_bar}>
            <ul>
                {items.map((item) => {
                    return <li><a href={item.path}><Text size='lg'>{`[${item.name}]`}</Text></a></li>
                })}
            </ul>
        </div>
    )
}


export default AppBar;
