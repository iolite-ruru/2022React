import React from "react";
import './Comment.css';

const Comment = (props) =>{
    const {name, comment} = props;
    return (
        <div className="section">
            <div className="imageContainer">
                <img className="profile"
                    alt="프로필 이미지"
                    src="https://blog.kakaocdn.net/dn/c0nsol/btqXrCOZ6J9/XLlGPEHQoIiwwIClQTkVPk/img.png"/>
            </div>
            <div className="contentContainer">
                <span className="name">{name}<br/></span>
                <span>{comment}</span>
            </div>
        </div>
    )
};

export default Comment;