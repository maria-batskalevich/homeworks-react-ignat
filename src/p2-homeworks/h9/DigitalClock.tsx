import React from "react";
import {ClockViewPropsType} from "./Clock";

export const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}
// import React, {useState} from 'react'
// import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
//
// export const DigitalClockView = () => {
//     const [timerId, setTimerId] = useState<number>(0)
//     const [date, setDate] = useState<Date>()
//     const [show, setShow] = useState<boolean>(false)
//
//     const stop = () => {
//         clearInterval(timerId)
//     }
//     const start = () => {
//         stop()
//         const id: number = window.setInterval(() => {
//             setDate(new Date())
//         }, 1000)
//         setTimerId(id)
//
//     }
//
//     const onMouseEnter = () => {
//         setShow(true)
//     }
//     const onMouseLeave = () => {
//         setShow(false)
//     }
//
//     const stringTime = date?.toLocaleTimeString() || <br/>
//     const stringDate = date?.toLocaleDateString() || <br/>
//
//     return (
//         <div>
//             <div
//                 onMouseEnter={onMouseEnter}
//                 onMouseLeave={onMouseLeave}
//             >
//                 {stringTime}
//             </div>
//             {show ? (
//                 <div>
//                     {stringDate}
//                 </div>
//             ) : (
//                 <br/>
//             )}
//             <SuperButton onClick={start}>start</SuperButton>
//             <SuperButton onClick={stop}>stop</SuperButton>
//
//         </div>
//     )
// }
//
//
