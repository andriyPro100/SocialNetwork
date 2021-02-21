import {connect} from "react-redux";
import UserPage from "../Components/UserPage/UserPage";
import {addPostActionCreator, updatePostActionCreator} from "../state/wall_reducer";

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
