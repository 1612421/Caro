import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.UserReducer.isAuthenticated
    }
}

export default connect(mapStateToProps)(NavBar);