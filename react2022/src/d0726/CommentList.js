import React from "react";
import Comment from "./Comment";
import './CommentList.css';

const CommentList = (props) =>{
    return (
        <div>
            <Comment name="고양이" comment="asdfsaf"/>
            <Comment name="강아지" comment="안녕하세용"/>
            <Comment name="가오리" comment="????"/>
            <Comment name="가나다" comment="ㅠㅠㅠ"/>
            <Comment name="라마바" comment="헐랭"/>
        </div>
    );
}

export default CommentList;