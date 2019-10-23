const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated'),
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
        default:
            return state;
    }
};

export default UserReducer;