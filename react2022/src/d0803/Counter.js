import React, { useReducer, useState } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { value: state.value+1 };
         case 'DECREMENT':
            return { value: state.value-1 };
        default:
            //아무것도 해당되지 않을 떄 기존 상태 반환
            return state.value;
    }
}

function Counter(props) {
    const [state, dispatch ] = useReducer(reducer, {value: 0});


    return (
        <div>
            <p>현재 카운터 값은 {state.value} 입니다.</p>
            <button onClick={() => dispatch({type:'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({type:'DECREMENT'})}>-1</button>
        </div>
    );
}

export default Counter;