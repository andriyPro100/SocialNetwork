import React from "react";

import '../../styles/UserPage.css';

import head_logo from "../../images/cloud.jpg"
import Wall from "./Wall/Wall";
import Posts from "./Wall/Posts";
import UserInformation from "./UserInformation";

const UserPage = (props) => {
    const posts = props.posts
    return (
        <div className="userPage-wrapper">
            <div className="head__img">
                <img src={head_logo} alt=""/>
            </div>
            <UserInformation/>
            <Wall newPostText={props.newPostText} dispatch={props.dispatch}/>
            <Posts posts={posts}/>
        </div>
    );
}

export default UserPage
