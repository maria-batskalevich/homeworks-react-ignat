import React, {useState} from 'react'
import {HamburgerButton} from './HamburgerButton/HamburgerButton'
import {BurgerNav} from './BurgerNav/BurgerNav'
import s from '../header/header.module.scss'

export function Header() {

    let [state, setState] = useState<boolean>(true)

    return (
        <div className={s.navbar}>
            <div className={s.trigger}>
                <HamburgerButton changeState={setState} state={state}/>
            </div>
            <BurgerNav state={state} callback={setState}/>
        </div>
    )
}

