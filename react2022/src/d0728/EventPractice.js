import React, { useState } from "react";

const EventPractice = () => {
    const regPhone = /^([0-9]{2,3})-?([0-9]{3,4})-?([0-9]{4})$/;

    const [form, setForm] = useState({
        name: '',
        phone: ''
    });
    const {name, phone} = form;

    const onChange = (e) => {
        setTimeout(() => console.log(e), 500);
        const fixedForm = {
            ...form, //... 전개 연산자
            [e.target.name]: e.target.value
        }
        setForm(fixedForm);
    }

    const onClick = (e) => {
        if(!name) alert('이름을 입력하세요');
        else if(!phone) alert('전화번호를 입력하세요');
        else if(!regPhone.test(phone)) alert('전화번호의 형식이 유효하지 않습니다');
        else {
            alert(name +' : '+ phone);
        }
    }
    
    const onKeyPress = (e) => {
        if(e.key === 'Enter') onClick();
    }

    return(
        <div>
            <h1>이름과 연락처를 적어주세요!</h1>
            <input type='text'
                name="name"
                placeholder='홍길동'
                onChange={ onChange }
                onKeyPress={ onKeyPress }></input>
            <input type='text'
                name="phone"
                placeholder='-없이 전화번호만 입력하세요'
                onChange={ onChange }
                onKeyPress={ onKeyPress }></input>
            <button onClick={ onClick }>
                확인
            </button>
        </div>
    )
}

export default EventPractice;