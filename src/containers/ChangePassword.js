import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import ChangePassword from '../components/ChangePassword';

const mapStateToProps = (state) => {
    return {
        shouldShowChangePassword: state.UserReducer.shouldShowChangePassword
    }
}

const mapDispatchToProps = (dispatch) => ({
    resetSuccessStatus: () => dispatch(UserAction.resetSuccessStatus()),
    invertShouldShowChangePassword: () => dispatch(UserAction.invertShouldShowChangePassword()),
    setErrorMessage: (messages) => dispatch(UserAction.setErrorMessage(messages)),
    changePassword: (postFields) => dispatch(UserAction.changePassword(postFields))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);