import React from 'react'
import s from './header.module.css'
import {PATH} from "./Routes";
import {NavLink} from 'react-router-dom'


function Header() {
    return (
        <div className={s.menu}>
            <NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>PreJunior</NavLink>
            <NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>Junior+</NavLink>
            <div className={s.buttonMenu}/>
        </div>
    )
}


export default Header
