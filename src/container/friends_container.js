import {connect} from "react-redux";
import FriendsPage from "../Components/FriendsPage/FriendsPage";
import {addFriendCreator, removeFriendCreator} from "../state/friends_reducer";


const mapStateToProps = (state) => {
    return (
        {
            users: state.friend.users
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addFriend: dispatch(addFriendCreator()),
            removeFriend: dispatch(removeFriendCreator()),
        }
    )
}

export const FriendsContainer =  connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
