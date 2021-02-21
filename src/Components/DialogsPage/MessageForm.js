import React from "react";

const MessageForm = (props) => {
    let textInput = React.createRef()
    const updateTextMessage = () => {
        props.updateTextMessage(textInput.current.value)
    }
    let sendMessage = () => {
        props.sendMessage()
    }
    return (
        <div className="wall">
            <input type="text" ref={textInput} value={props.newMessageText} onChange={() => updateTextMessage()} className="wall__input"/>
            <div className="wall__button">
                <button className="btn btn-primary" onClick={() => sendMessage()}>Send</button>
            </div>
        </div>
    );
}

export default MessageForm
