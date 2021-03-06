import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import preloader from "./preloader-violet.svg";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingType} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch();
    const state = useSelector<AppStoreType, LoadingType>(state => state.loading);
    const loading = state.isLoading;

    const setLoading = () => {
        dispatch(loadingAC(true));  // dispatch

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000); // setTimeout
        console.log("loading...");
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt={"preloader is here"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
