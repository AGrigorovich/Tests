import {apiURL} from '../constants';

export function sendUserDataForLoginToApi(userData) {
    return async function (dispatch) {

        dispatch({type: 'USER_DATA_LOGIN'});
        setTimeout(() => {
            fetch(apiURL + '/validate', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({email: userData.username, password: userData.password})
            })
                .then((response) => {
                    return response.json()
                })
                .then((res) => {
                    (res.status === "ok")
                        ? dispatch({type: 'USER_LOGIN_SUCCESS', payload: res.data.id})
                        : dispatch({type: 'USER_LOGIN_ERROR', payload: res.message})
                })
                .catch((error) => {
                    dispatch({type: 'USER_LOGIN_ERROR', payload: error.message})
                })
        }, 3000)
    }
}

export function clickLoginButton() {
    return function (dispatch) {
        dispatch({type: 'USER_EXIT'});
    }
}
