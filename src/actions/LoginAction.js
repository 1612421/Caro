import fetch from 'cross-fetch';

const LoginAction = {
    login: (postFields) => {
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
                    return dispatch({ type: 'LOGIN_SUCCESS' });
                }

                res.json()
                    .then((data) => dispatch({
                            type: 'LOGIN_FAIL',
                            payload: {
                                messages: data.messages
                            }
                    })).catch(err => dispatch({
                        type: 'LOGIN_FAIL',
                        payload: {
                            messages: err.message
                        }
                    }));
                }
            ).catch(err => dispatch({
                        type: 'LOGIN_FAIL',
                        payload: {
                            messages: err.message
                        }
                    }
                )
            );
        }
    }
}

export default LoginAction;