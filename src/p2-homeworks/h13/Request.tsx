import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestAPI} from "./API";
import s from './H13.module.scss'

export const Request = () => {

    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState<string>('')
    const [isResponse, setIsResponse] = useState(true)

    const requestHandler = async () => {
        setIsResponse(false)
        let res = await requestAPI(checked)
        setResponse(res)
        setIsResponse(true)
    }

    return (
        <div>
            <div className={s.align}>
                <div className={s.checkBox}>
                    <SuperCheckbox checked={checked} onChangeChecked={() => setChecked(!checked)}>
                        checkbox
                    </SuperCheckbox>
                </div>
                <div className={s.button}>
                    <SuperButton onClick={requestHandler} disabled={!isResponse}>
                        Send request
                    </SuperButton>
                </div>

            </div>

            <div className={s.result}>
                <h2>{!!response && response}</h2>
            </div>

        </div>
    );
};