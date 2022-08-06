import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loading from "./bll/loading.svg";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import React from "react";



export const Loading = () => {
    const isLoading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()
    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 2000)
    };
    return (
        <>
            {isLoading
                ? (
                    <div><img src={loading} alt="loading..."/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
        </>
    )
}
