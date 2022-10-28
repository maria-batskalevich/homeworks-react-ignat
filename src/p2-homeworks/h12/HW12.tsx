import React from "react";
import style from "./HW12.module.scss";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeAC, themeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'white', 'orange'];

function HW12() {

    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme);
    const dispatch = useDispatch()
    const onChangeOption = (value: themeType) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={style[theme]}>
            <h3>Homework 12</h3>
            <span className={style[theme + '-text']}>
            </span>
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />
        </div>
    );
}

export default HW12;
