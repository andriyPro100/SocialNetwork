export const ADD_TO_FRIENDS = "Friends/ADD_TO_FRIENDS"
export const REMOVE_FROM_FRIENDS = "Friends/REMOVE_FRIEND"


let initial_state = {
    users:[
        {id:1, firstName: "Vasil", lastName: "Bondarenko", isFriend: true, img: "", location: {city: "Kyiv", country: "Ukraine"}},
        {id:2, firstName: "Yaroslav", lastName: "Gozhiy", isFriend: true, img: "", location: {city: "Zhitomir", country: "Ukraine"}}
    ]
}

export const friendsReducer = (state=initial_state, action) => {

    switch (action.type){
        case ADD_TO_FRIENDS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, isFriend: true}
                    return user
                })
            }
        case REMOVE_FROM_FRIENDS:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId)
                        return {...user, isFriend: false}
                    return user
                })
            }
        default:
            return state
    }
}

export const addFriendCreator = (userId) => {
    return (
        {type: ADD_TO_FRIENDS, userId}
    )
}
export const removeFriendCreator = (userId) => {
    return (
        {type: REMOVE_FROM_FRIENDS, userId}
    )
}
