import { connect } from 'react-redux';
import MovesOnline from '../components/MovesOnline';

const mapStateToProps = (state) => {
    return {
        history: state.GameReducer.history,
        stepNumber: state.GameReducer.stepNumber
    }
}

export default connect(mapStateToProps)(MovesOnline);