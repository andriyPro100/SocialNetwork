import React from "react";

import Post from "./Post";

const messages = [
    {
        id: 1,
        message: "Hi, how are you?"
    },{
        id: 2,
        message: "Thank you"
    },{
        id: 3,
        message: "Wow! I am an amazing pianist!"
    },
]

const Posts = () => {
    return (
        <div className="posts-wrapper">
            {messages.map(item => <Post text={item.message}/>)}
        </div>
    );
}

export default Posts
