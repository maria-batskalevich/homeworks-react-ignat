import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from "../h1/wrapper.module.scss";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const onChangeRange = (value: number) => {
        return setValue1(value)
    }
    const onDoubleChangeRange = (value: number) => {
        return setValue2(value)
    }

    return (
        <div className={s.wrapper}>
            <h3>Homework 11</h3>
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    min={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    onDoubleChangeRange={onDoubleChangeRange}
                    max={value2}
                    min={value1}
                />
                <span>{value2}</span>
            </div>
        </div>
    )
}

export default HW11
