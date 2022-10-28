import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "../h1/wrapper.module.scss";

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name,
        }
        setUsers([...users, user])
    }

    return (
        <div className={s.wrapper}>
            <h3>Homework 3</h3>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    )
}

export default HW3
