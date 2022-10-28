import React from 'react'
import Routes from './Routes'
import {HashRouter} from "react-router-dom";
import {Header} from "./header/Header";
import mainCont from './Container.module.scss'
import s from './HW5.module.scss'

function HW5() {
    return (
        <div >
            {/*<h3>Homework 5</h3>*/}
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
                    <Header/>
                <div className={s.content}>
                    <div className={mainCont.container}>
                        <Routes/>
                    </div>
                </div>
            </HashRouter>
        </div>
    )
}

export default HW5
