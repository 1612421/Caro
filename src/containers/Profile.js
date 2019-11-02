import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import Profile from '../components/Profile';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated,
        username: state.UserReducer.username,
        email: state.UserReducer.email,
        avatar: state.UserReducer.avatar,
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (postField) => {
        dispatch(UserAction.login(postField));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);