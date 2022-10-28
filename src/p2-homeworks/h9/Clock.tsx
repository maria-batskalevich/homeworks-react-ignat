// import React, {useState} from 'react'
// import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
//
// function Clock() {
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
// export default Clock

// import React, {useEffect, useState} from "react";
// import {AnalogClockView} from "./AnalogClock";
//
// import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
// import {DigitalClockView} from "./DigitalClock";
//
//
// type PropsType = {
//     mode?: 'analog' | 'digital'
// }
//
// export const Clock: React.FC<PropsType> = (props) => {
//     const [date, setDate] = useState(new Date)
//     const [analog, setAnalog] = useState(true)
//     const [timerId, setTimerId] = useState<number>(0)
//
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             console.log('TICK')
//             setDate(new Date())
//         }, 1000)
//
//         return () => {
//             clearInterval(intervalId)
//         }
//     }, [])
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
//     let view;
//     switch (props.mode) {
//         case 'analog' :
//             view = <AnalogClockView date={date}/>
//             break;
//         case "digital" :
//         default:
//             view = <DigitalClockView/>
//     }
//     const onClickDigitalHandler = () => {
//         setAnalog(false)
//     }
//     const onClickAnalogHandler = () => {
//         setAnalog(true)
//     }
//
//
//     return <div>
//         {analog ? <AnalogClockView date={date}/> : <DigitalClockView />}
//         <SuperButton onClick={onClickDigitalHandler}>DigitalClock</SuperButton>
//         <SuperButton onClick={onClickAnalogHandler}>AnalogClock</SuperButton>
//         {/*<SuperButton onClick={start}>start</SuperButton>*/}
//         {/*<SuperButton onClick={stop}>stop</SuperButton>*/}
//
//     </div>
// }
//
// export type ClockViewPropsType = {
//     date: Date
// }

import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClock";
import {DigitalClockView} from "./DigitalClock";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './clock.module.scss'

type PropsType = {
    mode?: 'analog' | 'digital'
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date)
    const [analog, setAnalog] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog' :
            view = <AnalogClockView date={date}/>
            break;
        case "digital" :
        default:
            view = <DigitalClockView date={date}/>
    }
    const onClickDigitalHandler = () => {
        setAnalog(false)
    }
    const onClickAnalogHandler = () => {
        setAnalog(true)
    }

    return <div className={s.container}>
        <div className={s.view}>{analog ? <AnalogClockView date={date}/> : <DigitalClockView date={date}/>}</div>
        <div className={s.buttons}>
            <SuperButton onClick={onClickDigitalHandler}>DigitalClock</SuperButton>
            <SuperButton onClick={onClickAnalogHandler}>AnalogClock</SuperButton>
        </div>
    </div>
}

export type ClockViewPropsType = {
    date: Date
}

