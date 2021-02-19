import React from "react";
import ListDialogs from "./ListDialogs";
import Dialog from "./Dialog";

const Dialogs = (props) => {

    const friends = props.friends

    const messages = props.messages

    return (
        <div className="dialogs">
            <ListDialogs friends={friends} messages={messages}/>
            <Dialog messages={messages[0]}/>
        </div>
    )
}

export default Dialogs
