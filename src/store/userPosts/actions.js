import { getUserPosts } from "services";
import { FETCH_POSTS_ERROR, FETCH_POSTS_SUCCESS, FETCH_POSTS_REQUEST, FETCH_ERROR } from "constants";

export const fetchInitialUserPostsRequest = () => (
    {type: FETCH_POSTS_REQUEST}
)

export const fetchInitialUserPostsSuccess = (userPosts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: userPosts
    }
}

export const fetchInitialUserPostsError = (error) => ({
    type: FETCH_POSTS_ERROR,
    payload: error
})

export const fetchInitialUserPosts = (userId) => async(dispatch) => {
    try {
        fetchInitialUserPostsRequest()
        const response = await getUserPosts(userId)
        if(response.status === 200) {
            dispatch(fetchInitialUserPostsSuccess(response.data))
        }
    } catch (error) {
        dispatch({
            type: FETCH_ERROR,
            payload: console.log(error)
        })
    }
} 