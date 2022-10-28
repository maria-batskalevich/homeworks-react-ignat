import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.scss'
import style from '../h1/wrapper.module.scss'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div className={style.wrapper}>
            <h3>Homework 4</h3>
            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                />
                <SuperInputText
                    className={s.blue}
                />
                <SuperButton>
                    default
                </SuperButton>

                <SuperButton
                    red // пропсу с булевым значением не обязательно указывать true
                    onClick={showAlert}
                >
                    delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>
                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    One
                </SuperCheckbox>
            </div>
        </div>
    )
}

export default HW4
