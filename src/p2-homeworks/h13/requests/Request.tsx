import React, {ChangeEvent, useState} from "react";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./requests-api";

function Request() {

    const [serverResponse, setServerResponse] = useState<any>(null)
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const onClickButton = () => {
        requestsAPI.loadData(isChecked).then(res => {
            setServerResponse(res.data);
        }).catch(error => {
            console.log({...error});
            console.log(error.response ? error.response.data.errorText : error.message);
            setServerResponse(error.response.data);
        });
    };
    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked);
    }

    return (
        <div>
            <SuperCheckbox checked={isChecked} onChange={onChangeCheckbox}>Request argument</SuperCheckbox>
            <SuperButton onClick={onClickButton}>Server request</SuperButton>
            <div>{serverResponse && JSON.stringify(serverResponse)}</div>
        </div>
    )
}

export default Request;