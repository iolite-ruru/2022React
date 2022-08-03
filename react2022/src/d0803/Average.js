import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
    console.log('평균값 계산중..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState("");
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list]);

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <input type="number" name="number" value={number} onChange={onChange}/>
            <button onClick={onInsert}>입력</button>
            <ul>
            {
                 list.map((number)=>{
                    return <li> {number} </li>
                 })
            }
            </ul>
            <p>평균: {avg}</p>
        </div>
    );
}

export default Average;