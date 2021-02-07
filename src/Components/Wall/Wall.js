import React from "react";

import '../../styles/Content.css';

const Wall = () => {
    return (
        <div className="wall">
            <h2 className="wall__main_text">My posts</h2>
            <input type="text" className="wall__input"/>
            <div className="wall__button">
                <button className="button">Send</button>
            </div>
        </div>
    );
}

export default Wall
