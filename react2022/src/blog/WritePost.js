import React, { useState } from "react";

const WritePost = (props) => {
    const [ post, setPost ] = useState({ title:"", date:"", content:"" });
    const { title, content } = post;

    const UpdateHandler = (e) => {

        const fixedData = {
            ... post,
            [e.target.name]: e.target.value
        }
        setPost(fixedData);
    }

    const UploadPost = () => {
        if(post.title === ""){
            alert("제목을 입력해주세요.");
            return;
        }

        if(post.content === ""){
            alert("본문을 입력해주세요.");
            return;
        }

        const fixedData = {
            ... post,
            date: new Date().toLocaleDateString().replace(/ /g, "")
        }
        props.data.push(fixedData);
        alert("글 작성 완료");
    }

    return (
        <div>
            <h1>글 작성</h1>
            제목: <input type="text" name="title" onChange={UpdateHandler}/><br/>
            내용: <textarea name="content" onChange={UpdateHandler}/><br/>
            <button onClick={UploadPost}>작성</button>
        </div>
    );
}

export default WritePost;