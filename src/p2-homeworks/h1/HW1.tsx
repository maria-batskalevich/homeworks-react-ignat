import React from 'react'
import Message from "./Message";
import './Message.module.scss'
import s from './wrapper.module.scss'

const messageData = {
    avatar: 'https://i.postimg.cc/ydtzBx4p/B67-A3875-Web.jpg',
    name: 'Maria',
    message: 'Hi! What is your name?',
    time: '23:00',
}

function HW1() {
    return (
        <div className={s.wrapper}>
            <h3>Homework 1</h3>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
