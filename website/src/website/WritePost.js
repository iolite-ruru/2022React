import React, {useState} from 'react';
import './css/WritePost.css'
import './css/CommonStyle.css'

function WritePost(props){
    const { data } = props;

    const [inputs, setInputs]= useState({type:'etc', title:'',content:'', writer:'익명', date: new Date().toLocaleDateString().replace(/ /g, "")});
    const {title, content} = inputs;
    const WritePostF = () => {
        var todayDate = new Date().toLocaleDateString().replace(/ /g, "");
        setInputs({
            ...inputs,
            date: todayDate
        })
        data.push(inputs);

        alert('글 작성 완료');
        setInputs({
            type: 'etc',
            title:'',
            content:'',
            writer:'익명',
            // date: ''
        });
    };
  
    const ChangeData = (e) =>{
        const newInputs={
            ...inputs,
            [e.target.name]:e.target.value
        };
        setInputs(newInputs);
    };
  
    return (
      <div className='outer-div'>
        <h1>글작성</h1>
        <hr/>
        <div className='write-div'>


        주제:
        <select name="type" onChange={ChangeData}>
            <option value='기타' selected>기타</option>
            <option value='스탬프'>스탬프</option>
            <option value='매장정보'>매장정보</option>
            <option value='무료쿠폰'>무료쿠폰</option>
            <option value='고객센터'>고객센터</option>
        </select>
        <br/>
        <input placeholder='제목' name='title' value={title} onChange={ChangeData}/><br/>
        <textarea placeholder='내용을 입력하세요' name="content" value={content} onChange={ChangeData}/>
        <br/>
        <button onClick={WritePostF}
            className='write-btn'>작성</button>
                    </div>
      </div>
    )
  }
  
  export default WritePost;