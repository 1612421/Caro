import { connect } from 'react-redux';
import Root from '../components/Root';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated,
        account: state.UserReducer.account,
        username: state.UserReducer.username,
        email: state.UserReducer.email
    }
}

export default connect(mapStateToProps)(Root);