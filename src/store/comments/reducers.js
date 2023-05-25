import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_ERROR } from "constants"

const initialStateComments = {
    comment: [],
    isLoading: false,
    error: null
}

const commentsReducer = (state = initialStateComments, action) => {
    const {type, payload} = action

    switch(type) {
        case FETCH_COMMENTS_REQUEST :
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_COMMENTS_SUCCESS :
            return {
                ...state,
                comment: [...payload],
                isLoading: false
            }

        case FETCH_COMMENTS_ERROR : 
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        
        default :
            return state
    }
}

export default commentsReducer