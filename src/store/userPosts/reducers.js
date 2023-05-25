import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR, FETCH_POSTS_REQUEST } from "constants"

const initialState = {
    userPosts: [],
    isLoading: false,
    error: null,
}

const userPostsReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case FETCH_POSTS_REQUEST :
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_POSTS_SUCCESS :
            return {
                ...state,
                userPosts: [...payload],
                isLoading: false
            }

        case FETCH_POSTS_ERROR : 
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        
        default :
            return state
    }
}

export default userPostsReducer