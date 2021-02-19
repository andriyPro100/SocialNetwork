import React from "react";

import Post from "./Post";


const Posts = (props) => {

    const posts = props.posts
    debugger

    return (
        <div className="posts-wrapper">
            {posts.map(item => <Post text={item.message}/>)}
        </div>
    );
}

export default Posts
