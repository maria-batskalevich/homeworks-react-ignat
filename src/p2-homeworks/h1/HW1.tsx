import React from 'react'
import Message from "./Message";
import './Message.module.css'

const messageData = {
    avatar: 'https://i.postimg.cc/ydtzBx4p/B67-A3875-Web.jpg',
    name: 'Maria',
    message: 'Hi! What is your name?',
    time: '23:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*/!*для личного творчества, могу проверить*!/*/}
            {/*/!*<AlternativeMessage/>*!/*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1
