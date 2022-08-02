import React, { useState } from "react";
import Post from "./Post";
import DetailPost from "./DetailPost"

const PostList = (props) => {
    
    const data  = props.data;

    const [detailedPost, setDetailedPost]=useState({detailedTitle:'', detailedDate:'', detailedContent:''});
  
    return (
        <div>
            <h1>글 목록</h1>
            {
            data.map(element=>
                <div onClick={()=>{
                setDetailedPost({
                    detailedTitle: element.title,
                    detailedDate: element.date,
                    detailedContent: element.content
                })
                }}>
                <Post title={element.title} date={element.date} content={element.content}/>
                </div>
                )
            }

            {/* {
                (detailedPost.detailedTitle==='')
                ? null
                : <DetailPost title={detailedPost.detailedTitle} date={detailedPost.detailedDate} content={detailedPost.detailedContent}/>
            } */}
      </div>
    )
}

export default PostList;