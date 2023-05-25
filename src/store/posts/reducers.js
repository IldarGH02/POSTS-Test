import { FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_ERROR, FETCH_INITIAL_DATA_REQUEST, SEARCH_VALUE } from "constants"

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
    searchValue: ''
}

const postsReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch(type) {
        case FETCH_INITIAL_DATA_REQUEST :
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_INITIAL_DATA_SUCCESS :
            return {
                ...state,
                posts: [...payload],
                isLoading: false
            }

        case FETCH_INITIAL_DATA_ERROR : 
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        
        case SEARCH_VALUE :
            return {
                ...state,
                searchValue: payload
            }
        
        default :
            return state
    }
}

export default postsReducer