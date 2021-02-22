import React from "react";

import avatar from "../../../images/person-icon.png"

const Post = (props) => {
    return (
        <div className="post">
            <img src={avatar} alt=""/>
            <div className="post__text">{props.text}</div>
        </div>
    );
}

export default Post
