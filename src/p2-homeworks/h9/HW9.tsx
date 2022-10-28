import React from 'react'
import s from "../h1/wrapper.module.scss";
import {Clock} from "./Clock";

function HW9() {
    return (
        <div className={s.wrapper}>
            <h3>Homework 9. Current time.</h3>
            <Clock/>
        </div>
    )
}

export default HW9
