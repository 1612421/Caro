import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import Profile from '../components/Profile';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated,
        username: state.UserReducer.username,
        email: state.UserReducer.email,
        avatar: state.UserReducer.avatar,
        success: state.UserReducer.success,
        err: state.UserReducer.err,
        shouldShowChangePassword: state.UserReducer.shouldShowChangePassword
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateProfile: (postField) => {
        dispatch(UserAction.updateProfile(postField));
    },
    resetSuccessStatus: () => dispatch(UserAction.resetSuccessStatus()),
    updateAvatar: (postFields) => dispatch(UserAction.updateAvatar(postFields)),
    invertShouldShowChangePassword: () => dispatch(UserAction.invertShouldShowChangePassword()),
    setErrMessage: (messages) => dispatch(UserAction.setErrMessage(messages))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);