import React from "react";

function Clock(props){
    return (
        <div>
            <h1>안녕, 지금!</h1>
            <h2>현재 시간은 {new Date().toLocaleTimeString()} 입니다.</h2>
        </div>
    )
}

export default Clock;