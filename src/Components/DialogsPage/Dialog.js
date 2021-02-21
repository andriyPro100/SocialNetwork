import React from "react";

import "../../styles/Dialog.css"
import MessageForm from "./MessageForm";

function Message(props) {
    return (
        <div className="message">
            {props.text}
        </div>
    )
}

const Dialog = (props) => {
    return (
        <div className="dialog">
            <div className="messages">
                {props.messages.message.map(item => <Message text={item}/>)}
            </div>
            <MessageForm updateTextMessage={props.updateTextMessage}
                         sendMessage={props.sendMessage}
                         newMessageText={props.newMessageText}
            />
        </div>
    )
}

export default Dialog;
