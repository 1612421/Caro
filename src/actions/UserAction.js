import fetch from 'cross-fetch';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function setErrorMessage(messages){
    return {
        type: 'UPDATE_ERR',
        payload: {
            messages: [...messages]
        }
    };
}

function logout(){
    return dispatch => {
        fetch('http://localhost:3000/user/logout', {
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.status !== 200){
                dispatch(setErrorMessage(['Something is wrong. Please try later!'])); 

                if (res.status === 400){
                    history.push('/');
                }

                return;
            }

            dispatch({type: 'LOGOUT_SUCCESS'});
            return history.push('/');
        }).catch(err => {
            return dispatch(setErrorMessage([err.message]));
        });
    }
}

function  fetchInfoUser() {
    return dispatch => {
        fetch('http://localhost:3000/me', {
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            if (res.status !== 200){
                return dispatch(setErrorMessage(['Something is wrong. Please try later!'])); 
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
            return dispatch(setErrorMessage([err.message]));
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
                .then((data) => dispatch(setErrorMessage([...data.messages])))
                .catch(err => dispatch(setErrorMessage([err.message])));
            }
        ).catch(err => dispatch(setErrorMessage([err.message])));
    }
}

function postRegister(postFields){
    return dispatch => {
        fetch('http://localhost:3000/user/register', {
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
                .then((data) => dispatch(setErrorMessage([...data.messages])))
                .catch(err => dispatch(setErrorMessage([err.message])));
            }
        ).catch(err => dispatch(setErrorMessage([err.message])));
    }
}

const UserAction = {
    login: (postFields) => postLogin(postFields),
    getInfoUser: () => fetchInfoUser(),
    setErrorMessage: (messages) => setErrorMessage(messages),
    logout: () => logout(),
    register: (postFields) => postRegister(postFields)
}

export default UserAction;