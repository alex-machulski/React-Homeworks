import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import style from './Header.module.css'

function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const onMenuClick = () => setIsOpenMenu(!isOpenMenu);

    const finalClassName = `${style.navbar} ${isOpenMenu ? "" : style.closed}`;

    return (
        <div>
            <div>
                <button className={style.buttonMenu} onClick={onMenuClick}>Menu</button>
            </div>
            <nav className={finalClassName}>
                <div className={style.item}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={style.activeLink}>Pre-Junior</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.JUNIOR} activeClassName={style.activeLink}>Junior</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={style.activeLink}>Junior-Plus</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;
