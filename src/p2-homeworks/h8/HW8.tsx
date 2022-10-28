import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './HW8.module.scss'
import s from '../h1/wrapper.module.scss'


export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Maria', age: 31},
    {_id: 1, name: 'Emma', age: 22},
    {_id: 2, name: 'Sophia', age: 16},
    {_id: 3, name: 'Isabella', age: 64},
    {_id: 4, name: 'Mia', age: 35},
    {_id: 5, name: 'Olivia', age: 45},
]

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople)

    // need to fix any
    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={style.item}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const check18 = () => setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))

    return (
        <div className={s.wrapper}>
            <h3>Homework 8</h3>
            {finalPeople}
            <div>
                <SuperButton onClick={sortUp}>sort up by name</SuperButton>
                <SuperButton onClick={sortDown}>sort down by name</SuperButton>
                <SuperButton onClick={check18}>check 18</SuperButton>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW8
