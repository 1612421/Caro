import { connect } from 'react-redux';
import GameAction from '../actions/GameAction';
import Game from '../components/Game';

const mapStateToProps = (state) => {
    return {...state.GameReducer};
}

const mapDispatchToProps = (dispatch) => ({
    createNewGame: () => {
        dispatch(GameAction.createNewGame());
    },

    clickSquare: (i) => {
        dispatch(GameAction.clickSquare(i));
    },

    jumToStepNumber: (i) => {
        dispatch(GameAction.jumpToStepNumber(i));
    },

    sort: () => {
        dispatch(GameAction.sort());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);