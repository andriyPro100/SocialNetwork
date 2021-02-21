import React from "react";
import ListDialogs from "./ListDialogs";
import Dialog from "./Dialog";

const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <ListDialogs friends={props.friends}
                         messages={props.messages}/>
            <Dialog messages={props.messages[0]}
                    updateTextMessage={props.updateTextMessage}
                    sendMessage={props.sendMessage}
                    newMessageText={props.newMessageText}/>
        </div>
    )
}

export default Dialogs
