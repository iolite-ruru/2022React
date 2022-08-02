import React from "react";
import PostList from './PostList';
import WritePost from './WritePost';
import data from './data.json'

const BlogIndex = () => {
    return (
        <div>
            <WritePost data={data}/>
            <hr/>
            <PostList data={data}/>
        </div>
    )
}

export default BlogIndex;