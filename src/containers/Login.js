import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        err: state.UserReducer.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (postField) => {
        dispatch(UserAction.login(postField));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);