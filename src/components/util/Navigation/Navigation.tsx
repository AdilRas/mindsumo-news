import React from 'react';
import styles from './Navigation.module.scss'
import {NavLink} from 'react-router-dom';
import cx from 'classnames';

const Navigation = () => {

    const navlinkStyles = cx(styles.link, styles['nav-item']);
    const activeNavlinkStyles = cx(styles.link, styles['nav-item'], styles.activeLink);

    return (
        <div>
            <nav className={styles.nav}>
                <NavLink className={navlinkStyles} to="/">AdilNews</NavLink>
                <ul className={styles['nav-items']}>
                    <NavLink className={navlinkStyles} activeClassName={activeNavlinkStyles} to='/sports'>Sports</NavLink>
                    <NavLink className={navlinkStyles} activeClassName={activeNavlinkStyles} to='/tech'>Technology</NavLink>
                    <NavLink className={navlinkStyles} activeClassName={activeNavlinkStyles} to='/entertainment'>Entertainment</NavLink>
                </ul>
            </nav>

        </div>
    );
}

export default Navigation;
