import { connect } from 'react-redux';
import UserAction from '../actions/UserAction';
import Root from '../components/Root';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated,
        account: state.UserReducer.account,
        username: state.UserReducer.username,
        email: state.UserReducer.email
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(UserAction.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Root);