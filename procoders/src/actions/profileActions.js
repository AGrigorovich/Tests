import {apiURL} from '../constants';

export function getUserProfileDataFromApi(userId) {
    return async function (dispatch) {
        dispatch({type: 'GET_USER_DATA'});
        fetch(apiURL + '/user-info/' + userId)
            .then((response) => {
                return response.json()
            })
            .then((res) => {
                (res.status === "ok")
                    ? dispatch({type: 'GET_USER_DATA_SUCCESS', payload: res.data})
                    : dispatch({type: 'GET_USER_DATA_ERROR', payload: res.message})
            })
            .catch((error) => {
                dispatch({type: 'GET_USER_DATA_ERROR', payload: error.message})
            })
    }
}
