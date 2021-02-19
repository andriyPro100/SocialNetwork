import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../state/actions";

const Wall = (props) => {
    let textInput = React.createRef()
    const updatePost = () => {
        let value = textInput.current.value
        props.dispatch(updatePostActionCreator(value))
    }
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    return (
        <div className="wall">
            <h2 className="wall__main_text">My posts</h2>
            <input type="text" ref={textInput} value={props.newPostText} onChange={() => updatePost()} className="wall__input"/>
            <div className="wall__button">
                <button className="btn-success" onClick={() => addPost()}>Send</button>
            </div>
        </div>
    );
}

export default Wall
