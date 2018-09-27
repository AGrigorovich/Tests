import {apiURL} from '../constants';

export function getNewsFromAPI() {
    return async function (dispatch) {
        dispatch({type: 'GET_NEWS'});

        setTimeout(() => {
            fetch(apiURL + '/news')
                .then((response) => {
                    return response.json()
                })
                .then((res) => {
                    (res.status === "ok")
                        ? dispatch({type: 'GET_NEWS_SUCCESS', payload: res.data})
                        : dispatch({type: 'GET_NEWS_ERROR', payload: res.message})
                })
                .catch((error) => {
                    dispatch({type: 'GET_NEWS_ERROR', payload: error.message})
                })
        }, 3000)
    }
}
