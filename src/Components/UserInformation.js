import React from "react";

import '../styles/Content.css';

import avatar from "../images/avatar.jpg"

const UserInformation = () => {
    return (
        <div className="content">
            <img src={avatar} alt="avatar"/>
            <div className="content__information">
                <h2 className="information__name">Vasyl Neanderthal</h2>
                <div className="information__birth">2 january</div>
                <div className="information__city">Kyiv</div>
                <div className="information__sex">Male</div>
            </div>
        </div>
    );
}

export default UserInformation
