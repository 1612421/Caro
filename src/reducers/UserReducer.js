const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated'),
    account: localStorage.getItem('account'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    err: localStorage.getItem('err')
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
                
        case 'LOGIN_FAIL':
            return {
                ...state,
                isAuthenticated: false,
                err: [...action.payload.messages]
            };

        case 'INFO_SUCCESS':
            {
                localStorage.setItem('account', action.payload.account);
                localStorage.setItem('username', action.payload.username);
                localStorage.setItem('email', action.payload.email);
                return {
                    ...state,
                    ...action.payload
                }    
            }
            
        case 'INFO_FAIL':
            return {
                ...state,
                err: [...action.payload.messages]
            }
        default:
            return state;
    }
};

export default UserReducer;