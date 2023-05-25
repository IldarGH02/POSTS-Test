import { getComments } from "services";
import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_ERROR, FETCH_ERROR } from "constants";

export const fetchInitialCommentsRequest = () => (
    {type: FETCH_COMMENTS_REQUEST}
)

export const fetchInitialCommentsSuccess = (comments) => {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
}

export const fetchInitialCommentsError = (error) => ({
    type: FETCH_COMMENTS_ERROR,
    payload: error
})

export const fetchInitialComments = (id) => async(dispatch) => {
    try {
        fetchInitialCommentsRequest()
        const response = await getComments(id)
        if(response.status === 200) {
            dispatch(fetchInitialCommentsSuccess(response.data))
        }
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload: console.log(error)
        })
    }
} 