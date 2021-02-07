import React from "react";

import '../../styles/Content.css';

import avatar from "../../images/avatar.jpg"

const Post = () => {
    return (
        <div className="post">
            <img src={avatar} alt=""/>
            <div className="post__text">Lorem ipsum dolor sit amet.</div>
        </div>
    );
}

export default Post
