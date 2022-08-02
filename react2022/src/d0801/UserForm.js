import React, { useState } from "react";

function UserForm(props) {
    const [ form, setForm ] = useState({
        name: '',
        gender: '남자'
    });

    const { name, gender } = form;

    const onChange = (e) => {
        const fixedForm = {
            ...form, //... 전개 연산자
            [e.target.name]: e.target.value
        }
        setForm(fixedForm);
    }

    const onSubmit = () => { alert("이름:"+ name +", 성별:"+gender); }

    return (
        <div>
            <form onSubmit={onSubmit}>
                이름: <input type="text" name="name" onChange={onChange}/> <br/>
                성별:
                <select name="gender" onChange={onChange} >
                    <option selected value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
                <input type="submit" value="제출"/>
            </form>

        </div>
    );
}

export default UserForm;