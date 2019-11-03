const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated'),
    account: localStorage.getItem('account'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    avatar: localStorage.getItem('avatar'),
    err: [],
    success: false,
    shouldShowChangePassword: false
};

const UserReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS':{
            localStorage.setItem('isAuthenticated', true);
            return  {
                ...state,
                isAuthenticated: true,
                err: []
            };
        }

        case 'INFO_SUCCESS':{
            localStorage.setItem('account', action.payload.account);
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('email', action.payload.email);
            localStorage.setItem('avatar', action.payload.avatar);
            return {
                ...state,
                ...action.payload
            }    
        }

        case 'LOGOUT_SUCCESS': {
            localStorage.setItem('isAuthenticated', "");
            return {
                ...state,
                isAuthenticated: null,
                err: []
            } 
        }

        case 'PROFILE_UPDATE_SUCCESS': {
            localStorage.setItem('username', action.payload.username);
            localStorage.setItem('email', action.payload.email);
            return {
                ...state,
                success: true,
                ...action.payload,
                err: []
            }
        }

        case 'AVATAR_UPDATE_SUCCESS':{
            localStorage.setItem('avatar', action.payload.avatar);
            return{
                ...state,
                success: true,
                ...action.payload,
                err: []
            }
        }

        case 'UPDATE_ERR':
            return {
                ...state,
                success: false,
                err: [...action.payload.messages]
            }

        case 'INVERT_SHOW_CHANGE_PASSWORD':
            return {
                ...state,
                shouldShowChangePassword: !state.shouldShowChangePassword
            }

        case 'RESET_SUCCESS_STATUS':
            return{
                ...state,
                success: false,
                err: []
            }
        
        case 'PASSWORD_CHANGE_SUCCESS':
            return{
                ...state,
                success: true,
                err: []
            }

        default:
            return state;
    }
};

export default UserReducer;