import { connect } from 'react-redux';
import GameAction from '../actions/GameAction';
import Game from '../components/Game';

const mapDispatchToProps = (dispatch) => ({
    invertPlayingOfflineStatus: () => dispatch(GameAction.invertPlayingOfflineStatus())
});

export default connect(null ,mapDispatchToProps)(Game);