import React, { useState } from "react";
import useInputs from "./useInputs";

function Info(props) {
    const [state , onChange] = useInputs({
        name: "",
        nickname: ""
    });
    const { name, nickname } = state;

    return (
        <div>
            <input type="text" name="name" value={name} onChange={onChange}/>
            <input type="text" name="nickname" value={nickname} onChange={onChange}/>
            <br/>
            <p>이름: { name }</p>
            <p>닉네임: { nickname }</p>
        </div>
    );
}

export default Info;