import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import Register from '../components/Register';

const mapStateToProps = (state) => {
    return {
        err: state.UserReducer.err
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: (postField) => {
        dispatch(UserAction.register(postField));
    },

    setErrorMessage: (messages) => {
        dispatch(UserAction.setErrorMessage(messages));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);