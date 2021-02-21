import DialogsPage from "../Components/DialogsPage/DialogsPage";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateTextMessageActionCreator} from "../state/dialog_reducer";


const mapStateToProps = (state) => {
    return (
        {
            friends: state.dialog.friends,
            messages: state.dialog.messages,
            newMessageText: state.dialog.newMessageText
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            sendMessage: () => {dispatch(sendMessageActionCreator())},
            updateTextMessage: (value) => {dispatch(updateTextMessageActionCreator(value))}
        }
    )
}

export const DialogContainer =  connect(mapStateToProps, mapDispatchToProps)(DialogsPage)
