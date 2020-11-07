import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';
import cx from 'classnames';

const Navigation = () => {

    const navlinkStyles = cx(styles.link, styles['nav-item']);

    return (
        <div>
            <nav className={styles.nav}>
                <NavLink className={navlinkStyles} to="/">AdilNews</NavLink>
                <h4>Your Source for the latest on Sports, Tech and Entertainment</h4>
            </nav>

        </div>
    );
}

export default Navigation;
