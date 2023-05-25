import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, FETCH_USERS_REQUEST } from "constants"

const initialStateUsers = {
    users: [],
    isLoading: false,
    error: null
}

const usersReducer = (state = initialStateUsers, action) => {
    const {type, payload} = action

    switch(type) {
        case FETCH_USERS_REQUEST :
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_USERS_SUCCESS :
            return {
                ...state,
                users: [...payload],
                isLoading: false
            }

        case FETCH_USERS_ERROR : 
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        
        default :
            return state
    }
}

export default usersReducer