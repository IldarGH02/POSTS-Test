import { getUsers } from "services";

import { FETCH_USERS_ERROR, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, FETCH_ERROR } from "constants";

export const fetchInitialDataRequest = () => (
    {type: FETCH_USERS_REQUEST}
)

export const fetchInitialDataSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchInitialDataError = (error) => ({
    type: FETCH_USERS_ERROR,
    payload: error
})

export const fetchInitiaUsers = () => async(dispatch) => {
    try {
        fetchInitialDataRequest()
        const response = await getUsers()
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