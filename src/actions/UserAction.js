import fetch from 'cross-fetch';

function  fetchInfoUser() {
    return dispatch => {
        fetch('http://localhost:3000/me', {
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.status !== 200){
                return dispatch({ 
                    type: 'INFO_FAIL',
                    payload: {
                        messages: ['Something is wrong. Please try later!']
                    }
                });
            }

            return res.json();
        }).then(rs => {
            return dispatch({ 
                type: 'INFO_SUCCESS',
                payload: {
                    ...rs.data
                }
            });
        }).catch(err => {
            return dispatch({ 
                type: 'INFO_FAIL',
                payload: {
                    messages: [err.messages]
                }
            });
        });
    }
}

function postLogin(postFields){
    return dispatch => {
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(postFields)
        }).then((res) => {
            if (res.status === 200){
                dispatch({ type: 'LOGIN_SUCCESS' });
                return dispatch(fetchInfoUser());
            }

            res.json()
                .then((data) => dispatch({
                        type: 'LOGIN_FAIL',
                        payload: {
                            messages: [...data.messages]
                        }
                })).catch(err => dispatch({
                    type: 'LOGIN_FAIL',
                    payload: {
                        messages: [err.message]
                    }
                }));
            }
        ).catch(err => dispatch({
                    type: 'LOGIN_FAIL',
                    payload: {
                        messages: [err.message]
                    }
                }
            )
        );
    }
}

const UserAction = {
    login: (postFields) => postLogin(postFields),
    getInfoUser: () => fetchInfoUser()
}

export default UserAction;