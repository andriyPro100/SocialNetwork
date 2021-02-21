import {connect} from "react-redux";
import {addPostActionCreator, updatePostActionCreator, updateTextMessageActionCreator} from "../state/actions";
import UserPage from "../Components/UserPage/UserPage";

const mapStateToProps = (state) => {
    return (
        {
            newPostText: state.wall.newPostText,
            posts: state.wall.posts
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            addPost: () => {dispatch(addPostActionCreator())},
            updatePostText: (value) => {dispatch(updatePostActionCreator(value))}
        }
    )
}

export const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage)
