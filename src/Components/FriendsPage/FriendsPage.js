import React from "react";
import no_img from "../../images/person-icon.png"
import "../../styles/FriendsPage.css"

function User(props) {

    const addFriend = (id) => {
        props.addFriend(id)
    }
    const removeFriend = (id) => {
        props.removeFriend(id)
    }

    return (
        <div className="user border border-secondary m-1 p-2">
            <div className="user__img">
                <img className="rounded-circle border border-secondary" src={props.user.img === "" ? no_img : props.user.img} alt=""/>
            </div>
            <div className="user__info">
                <div className="user__name">
                    {props.user.firstName} {props.user.lastName}
                </div>
                <div className="user__location mx-2">
                    {props.user.location.city}, {props.user.location.country}
                </div>
            </div>
            <div className="user__addFriend">
                <button className="btn btn-primary m-4"
                        onClick={() => props.user.isFriend ? addFriend(props.user.id) : removeFriend(props.user.id)}
                >{props.user.isFriend ? "Remove" : "Add"}</button>
            </div>
        </div>
    )
}

const FriendsPage = (props) => {
    return (
        <div className="friends">
            {props.users.map(user => <User key={user.id} user={user} addFriend={props.addFriend} removeFriend={props.removeFriend}/>)}
        </div>
    )
}

export default FriendsPage
