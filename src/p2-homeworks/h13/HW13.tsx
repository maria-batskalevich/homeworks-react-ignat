import React from 'react';
import style from "../h13/H13.module.scss";
import {Request} from "./Request";
import s from "../h1/wrapper.module.scss";


export const HW13 = () => {

    return (
        <div className={style.hw13&& s.wrapper}>
            <h3>Homework 13</h3>
            <Request />
        </div>
    );
};