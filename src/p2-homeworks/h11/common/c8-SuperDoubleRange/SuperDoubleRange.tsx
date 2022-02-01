import React, {ChangeEvent} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: number) => void
    onDoubleChangeRange: (value: number) => void
    onChangeDoubleRange?: (value: [number, number]) => void
    value?: [number, number]
    max:number
    min:number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, min, onDoubleChangeRange, max
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        +e.currentTarget.value <= max && onChangeRange(+e.currentTarget.value)
    }
    const onDoubleChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        +e.currentTarget.value >= min && onDoubleChangeRange(+e.currentTarget.value)
    }

    const doubleRangeClass = `${s.range} ${s.doubleInput}`
    return (
        <div className={s.doubleRangeBlock}>
            <div className={s.backTone}></div>
            <input
                type={'range'}
                onChange={onChangeCallback}
                value={min}
                className={doubleRangeClass}

                /*{...restProps} */
            />
            <input
                type={'range'}
                onChange={onDoubleChangeCallback}
                value={max}
                className={doubleRangeClass}

                /*{...restProps} */
            />
        </div>
    )
}

export default SuperDoubleRange
