import { getPosts } from "services";
import { FETCH_INITIAL_DATA_ERROR, FETCH_INITIAL_DATA_SUCCESS, FETCH_INITIAL_DATA_REQUEST, FETCH_ERROR, SEARCH_VALUE } from "constants";

export const fetchInitialDataRequest = () => (
    {type: FETCH_INITIAL_DATA_REQUEST}
)

export const fetchInitialDataSuccess = (posts) => {
    return {
        type: FETCH_INITIAL_DATA_SUCCESS,
        payload: posts
    }
}

export const fetchInitialDataError = (error) => ({
    type: FETCH_INITIAL_DATA_ERROR,
    payload: error
})

export const fetchInitialData = () => async(dispatch) => {
    try {
        fetchInitialDataRequest()
        const response = await getPosts()
        if(response.status === 200) {
            dispatch(fetchInitialDataSuccess(response.data))
        }
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload: console.log(error)
        })
    }
} 

export const searchPosts = (payload) => {
    return {
        type: SEARCH_VALUE,
        payload: payload
    }
}