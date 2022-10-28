import React from 'react'
import s from './Message.module.scss'

type PropsType = {
    avatar: string,
    name: string
    message: string
    time: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={s.container}>
            <img className={s.avatar} src={props.avatar} alt=""/>
            <div className={s.dialog}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
                <div className={s.arrow}></div>
            </div>



        </div>
    )
}

export default Message
