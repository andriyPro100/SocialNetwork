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
    debugger
    return (
        <div className="dialog">
            <div className="messages">
                {props.messages.message.map(item => <Message text={item}/>)}
            </div>
            <MessageForm newMessageText={props.newMessageText}
                         dispatch={props.dispatch}
            />
        </div>
    )
}

export default Dialog;
