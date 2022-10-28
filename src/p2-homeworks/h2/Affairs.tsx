import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.scss'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter?: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }
    const setClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }
    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={setAll} className={cnAll}>All</button>*/}
            {/*<button onClick={setHigh} className={cnHigh}>High</button>*/}
            {/*<button onClick={setMiddle} className={cnMiddle}>Middle</button>*/}
            {/*<button onClick={setLow} className={cnLow}>Low</button>*/}

            {/*<button onClick={set} className={setClass('all')} value={'all'}>All</button>*/}
            {/*<button onClick={set} className={setClass('high')} value={'high'}>High</button>*/}
            {/*<button onClick={set} className={setClass('middle')} value={'middle'}>Middle</button>*/}
            {/*<button onClick={set} className={setClass('low')} value={'low'}>Low</button>*/}
            <SuperButton onClick={set} className={setClass('all')} value={'all'}>All</SuperButton>
            <SuperButton onClick={set} className={setClass('high')} value={'high'}>High</SuperButton>
            <SuperButton onClick={set} className={setClass('middle')} value={'middle'}>Middle</SuperButton>
            <SuperButton onClick={set} className={setClass('low')} value={'low'}>Low</SuperButton>
        </div>
    )
}

export default Affairs
