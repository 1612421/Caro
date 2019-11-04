import { connect } from 'react-redux';
import Status from '../components/Status';

const mapStateToProps = (state) => {
    return {
        haveWinner: state.GameReducer.haveWinner,
        xIsNext: state.GameReducer.xIsNext,
        youAre: state.SocketReducer.youAre
    };
}

export default connect(mapStateToProps)(Status);