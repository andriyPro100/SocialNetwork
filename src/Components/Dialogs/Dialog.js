import React from "react";

import "../../styles/Dialog.css"

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
            {props.messages.message.map(item => <Message text={item}/>)}
        </div>
    )
}

export default Dialog;
