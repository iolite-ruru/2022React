import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './css/CommonStyle.css'
import './css/InquiryPost.css'

const InquiryPost = (props) => {
    const { data } = props;
   
    const { id } = useParams();
    const post = data.find(item => {
        return item.id == id;
    })
    const content = post.content.split("\n").map(line=>{
        return (
            <span>
                {line}
                <br/>
            </span>
        )});

    return (
        <div className='outer-div'>
            <div className='a-post-div'>
                <div className='post-title-div'>
                    <h1 className='post-title-txt'>{'[' + post.type +'] '+ post.title}</h1>
                </div>            
                <hr/>
                <div className='post-body-div'>
                    <p className='post-date-txt'>작성일: {post.date}</p>
                    <p className='post-writer-txt'>작성자: {post.writer}</p>
                    <p>{content}</p>
                </div>
            </div>
            <div className='btn-wrap'>
                <Link to='/inquirylist'>
                    <button className='inquiry-btn'>돌아가기</button>
                </Link>
            </div>
        </div>
    );
}

export default InquiryPost;