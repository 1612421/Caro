import { connect } from 'react-redux';
import LoginAction from '../actions/LoginAction';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated,
        err: state.UserReducer.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (postField) => {
        dispatch(LoginAction.login(postField));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);