import React from "react";

import Post from "./Post";


const Posts = ({posts}) => {

    return (
        <div className="posts-wrapper">
            {posts.map(item => <Post key={item.id} text={item.message}/>)}
        </div>
    );
}

export default Posts
