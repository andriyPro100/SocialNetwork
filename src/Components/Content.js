import React from "react";

import '../styles/Content.css';

import head_logo from "../images/cloud.jpg"
import Wall from "./Wall/Wall";
import Posts from "./Wall/Posts";
import UserInformation from "./UserInformation";

const Content = () => {
    return (
        <div className="content-wrapper">
            <div className="head__img">
                <img src={head_logo} alt=""/>
            </div>
            <UserInformation/>
            <Wall/>
            <Posts/>
        </div>
    );
}

export default Content
