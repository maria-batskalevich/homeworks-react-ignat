import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.scss'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any

}

export function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }
    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback} className={s.item + ' ' + s.button}>X</SuperButton>
        </div>
    )
}

export default Affair
