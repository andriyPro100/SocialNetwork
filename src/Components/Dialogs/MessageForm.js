import React from "react";
import {sendMessageActionCreator, updateTextMessageActionCreator} from "../../state/actions";

const MessageForm = (props) => {
    let textInput = React.createRef()
    const updateTextMessage = () => {
        let value = textInput.current.value
        props.dispatch(updateTextMessageActionCreator(value))
    }
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
    }
    return (
        <div className="wall">
            <input type="text" ref={textInput} value={props.newMessageText} onChange={() => updateTextMessage()} className="wall__input"/>
            <div className="wall__button">
                <button className="btn-success" onClick={() => sendMessage()}>Send</button>
            </div>
        </div>
    );
}

export default MessageForm
