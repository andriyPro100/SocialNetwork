import React from "react";
import "../../styles/ListDialogs.css"
import iconPerson from "../../images/person-icon.png"


function ItemListDialogs(props) {
    return (
        <div className="item_dialog">
            <div className="user_icon">
                <img src={iconPerson} alt=""/>
            </div>
            <div className="message">
                <div className="name_bold">
                    {props.name}
                </div>
                {props.message.message[0]}
            </div>
        </div>
    )
}

const ListDialogs = (props) => {
    return (
        <div className="list_dialogs">
            {props.friends.map(item => <ItemListDialogs name={item.name} message={props.messages[item.id-1]}/>)}
        </div>
    )
}

export default ListDialogs
