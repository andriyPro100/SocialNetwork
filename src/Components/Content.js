import React from "react";

import '../styles/Content.css';

import avatar from "../images/avatar.jpg"
import head_logo from "../images/cloud.jpg"

const Content = () => {
    return (
        <div className="content-wrapper">
                <div className="head__img">
                    <img src={head_logo} alt=""/>
                </div>
                <div className="content">
                    <img src={avatar} alt="avatar"/>
                    <div className="content__information">
                        <h2 className="information__name">Vasyl Neanderthal</h2>
                        <div className="information__birth">2 january</div>
                        <div className="information__city">Kyiv</div>
                        <div className="information__sex">Male</div>
                    </div>
                </div>
                <div className="wall">
                    <h2 className="wall__main_text">My posts</h2>
                    <input type="text" className="wall__input"/>
                    <div className="wall__button">
                        <button className="button">Send</button>
                    </div>
                </div>
                <div className="posts-wrapper">
                    <div className="post">
                        <img src={avatar} alt=""/>
                        <div className="post__text">Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className="post">
                        <img src={avatar} alt=""/>
                        <div className="post__text">Lorem ipsum dolor sit amet.</div>
                    </div>
                    <div className="post">
                        <img src={avatar} alt=""/>
                        <div className="post__text">Lorem ipsum dolor sit amet.</div>
                    </div>
                </div>
            </div>

    );
}

export default Content
