import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string,
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void,
    addUser: () => void,
    error: string,
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void,
    totalUsers: number,
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter}
) => {
    const inputClass = error ? s.errorInput : s.input

    return (
        <div className={s.greeting}>
            <div>
                <input
                    id={'input'}
                    value={name}
                    onChange={setNameCallback}
                    className={inputClass}
                    onKeyDown={onEnter}
                    onBlur={setNameCallback}/>
                <div className={s.error}>{error}</div>
            </div>
            <SuperButton onClick={addUser} className={s.button} disabled={!name}>ADD+</SuperButton>
            <div className={s.count}>{totalUsers}</div>

        </div>

    )
}

export default Greeting
