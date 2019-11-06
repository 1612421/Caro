const initialState = {
    squares: Array(400).fill(null),
    xIsNext: true,
    stepNumber: 0,
    history: [],
    squaresWinner: [],
    haveWinner: false,
    content: 'Decrement',
    oldSquaresWinner: [],
    isDrawn: false,
    isPlayingOffline: false,
};

// Kiểm tra hàng ngang
function checkRow(state, indexClick){
    let temp = 0;
    let head1 = false;
    let head2 = false;
    let i = indexClick;
    const currentRow = Math.floor(i / 20);
    const { xIsNext, squares } = state;
    const nextPlayer = xIsNext ? 'x' : 'o';
    const winner = [];

    while (temp < 5){
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head1 = true;
            break;
        }

        temp += 1;

        if (Math.floor((i - 1) / 20) !== currentRow){
            head1 = true;
            winner.push(i);
            break;
        }

        if ((temp === 5) && (squares[i - 1] === nextPlayer)){
            head1 = true;
        }

        winner.push(i);
        i -= 1;
    }

    i = indexClick;
    winner.shift();

    while (temp < 6){
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head2 = true;
            break;
        }

        temp += 1;

        if (Math.floor((i + 1) / 20) !== currentRow){
            head2 = true;
            winner.push(i);
            break;
        }

        if ((temp === 6) && (squares[i + 1] === nextPlayer)){
            head2 = true;
        }

        winner.push(i);
        i += 1;
    }

    if ((temp === 6) && !((head1 === true) && (head2 === true))){
        return {
            result: true,
            squaresWinner: winner
        }
    }
    
    return {
        result: false
    };
}

// Kiểm tra hàng dọc
function checkColumn(state, indexClick){
    let temp = 0;
    let head1 = false;
    let head2 = false;
    let i = indexClick;
    const {xIsNext, squares} = state;
    const  nextPlayer = xIsNext ? 'x' : 'o';
    const winner = [];

    while (temp < 5){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head1 = true;
            break;
        }

        temp += 1;

        if (i - 20 < 0){
            head1 = true;
            winner.push(i);
            break;
        }

        if ((temp === 5) && (squares[i - 20] === nextPlayer)){
            head1 = true;
        }

        winner.push(i);
        i -= 20;
    }

    i = indexClick;
    winner.shift();

    while (temp < 6){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head2 = true;
            break;
        }

        temp += 1;

        if (i + 20 > 399){
            head2 = true;
            winner.push(i);
            break;
        }

        if ((temp === 6) && (squares[i + 20] === nextPlayer)){
            head2 = true;
        }

        winner.push(i);
        i += 20;
    }

    if ((temp === 6) && !((head1 === true) && (head2 === true))){
        return {
            result: true,
            squaresWinner: winner
        }
    }
        
    return {
        result: false
    }
}

// Kiểm tra đường chéo trái sang phải
function checkSlash(state, indexClick){
    let temp = 0;
    let head1 = false;
    let head2 = false;
    let i = indexClick;
    const {xIsNext, squares} = state;
    const nextPlayer = xIsNext ? 'x' : 'o';
    const winner = [];

    while (temp < 5){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head1 = true;
            break;
        }

        temp += 1;

        if (i - 21 < 0){
            head1 = true;
            winner.push(i);
            break;
        }

        if ((temp === 5) && (squares[i - 21] === nextPlayer)){
            head1 = true;
        }

        winner.push(i);
        i -= 21;
    }

    i = indexClick;
    winner.shift();

    while (temp < 6){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head2 = true;
            break;
        }

        temp += 1;

        if (i + 21 > 399){
            head2 = true;
            winner.push(i);
            break;
        }

        if ((temp === 6) && (squares[i + 21] === nextPlayer)){
            head2 = true;
        }

        winner.push(i);
        i += 21;
    }

    if ((temp === 6) && !((head1 === true) && (head2 === true))){
        return {
            result: true,
            squaresWinner: winner
        }
    }

    return {
        result: false
    }
}

// Kiểm tra đường chéo phải sang trái
function checkBackSlash(state, indexClick){
    let temp = 0;
    let head1 = false;
    let head2 = false;
    let i = indexClick;
    const {xIsNext, squares} = state;
    const nextPlayer = xIsNext ? 'x' : 'o';
    const winner = [];

    while (temp < 5){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head1 = true;
            break;
        }

        temp += 1;

        if (i - 19 < 0){
            head1 = true;
            winner.push(i);
            break;
        }

        if ((temp === 5) && (squares[i - 19] === nextPlayer)){
            head1 = true;
        }

        winner.push(i);
        i -= 19;
    }

    i = indexClick;
    winner.shift();

    while (temp < 6){
        
        if (squares[i] === null){
            break;
        }

        if (squares[i] === nextPlayer){
            head2 = true;
            break;
        }

        temp += 1;

        if (i + 19 > 399){
            head2 = true;
            winner.push(i);
            break;
        }

        if ((temp === 6) && (squares[i + 19] === nextPlayer)){
            head2 = true;
        }

        winner.push(i);
        i += 19;
    }

    if ((temp === 6) && !((head1 === true) && (head2 === true))){
        return {
            result: true,
            squaresWinner: winner
        }
    }
        
    return {
        result: false
    };
}

// Hàm tính toán xem người có người win không
// Kiểm tra xem người chơi hiện tại có thắng không
function calculateWinner(state, indexClick){
    let result = checkRow(state, indexClick);

    if (result.result){
        return result;
    }

    result = checkColumn(state, indexClick);
    if (result.result){
        return result;
    }

    result = checkSlash(state, indexClick);
    if (result.result){
        return result;
    }

    return checkBackSlash(state, indexClick);
}

// Xử lí khi click một ô trên bàn cờ
function clickSquare(state, i){
    const { squares, xIsNext, content, history, stepNumber, haveWinner } = state;

    // Nếu đã có người win thì không xử lí tiếp nữa
    if(haveWinner){
        return null;
    }

    const temp = squares.slice();
    
    // Nếu ô vừa click đã kích trước đó thì không xử lí nữa
    if (temp[i] != null){
        return null;
    }

    // Gán ký tự đại diện cho lượt người chơi vào ô được click
    temp[i] = xIsNext? 'x' : 'o';
    let tempHistory = [];

    // Nếu danh sách nước đi đang được sắp xếp tăng dần...
    if (content === 'Increment')
    {
        // Chèn nước đi với vào cuối danh sách nước đi
        tempHistory = history.slice(0, stepNumber);
        tempHistory.push({
            value: temp[i],
            clickIndex: i,
            stepNumber
        });
    // Ngược lại thì...
    }else{
        // Chèn nước đi vào đầu danh sách nước đi
        tempHistory = history.slice(history.length - stepNumber);
        tempHistory.unshift({
            value: temp[i],
            clickIndex: i,
            stepNumber
        });
    }

    // Kết quả state tạm thời
    const result = {
        squares: temp,
        xIsNext: !xIsNext,
        history: tempHistory,
        stepNumber: stepNumber + 1
    };

    const calculteResult = calculateWinner({...result}, i);
    
    if (calculteResult.result){
        result.haveWinner = true;
        result.squaresWinner = calculteResult.squaresWinner;
        result.oldSquaresWinner = calculteResult.squaresWinner;
    }

    return result;
}

function jumpToStepNumber(state, index){
    const tempSquares = Array(400).fill(null);
    const { history, content, oldSquaresWinner, haveWinner, xIsNext } = state;
    let tempSquaresWinner = [];
    
    if (content === 'Increment'){
        for (let i = 0; i < index + 1; i += 1){
            tempSquares[history[i].clickIndex] = history[i].value;
        }

        if (index === history.length - 1){
            tempSquaresWinner = oldSquaresWinner;
        }

        let temp = history[index].value !== 'x';
        temp = haveWinner? xIsNext : temp;

        return ({
            squares: tempSquares,
            stepNumber: index + 1,
            xIsNext: temp,
            squaresWinner: tempSquaresWinner
        });
    }

    const len = history.length;

    for (let i = 0; i < index + 1; i += 1){
        tempSquares[history[len - i - 1].clickIndex] = history[len - i - 1].value;
    }
    
    if (history.length - index - 1 === 0){
        tempSquaresWinner = oldSquaresWinner;
    }

    let temp = history[len - index - 1].value !== 'x';
    temp = haveWinner? xIsNext : temp;


    return ({
        squares: tempSquares,
        stepNumber: index + 1,
        xIsNext: temp,
        squaresWinner: tempSquaresWinner
    });
}

function sort(state){
    const { content, history } = state;

    if (content === 'Increment'){
        return ({
            history: history.reverse(),
            content: 'Decrement'
        });
    }

    return ({
        history: history.reverse(),
        content: 'Increment'
    });
}

function createNewGameOnline(youAre){
    return {
        ...initialState,
        xIsNext: youAre !== 'x'
    }
}

function undoPreAction(state) {
    if (state.stepNumber > 1) {
        return jumpToStepNumber(state, state.stepNumber - 2);
    }

    return createNewGameOnline();
}

function playByBot(state) {
    const { squares } = state;
    let clickIndex = Math.floor(Math.random() * 400)

    while (squares[clickIndex]) {
        clickIndex = Math.floor(Math.random() * 400);
    }

    return clickSquare(state, clickIndex);
}

const GameReducer = (state = initialState, action) => {
    switch (action.type){
        case 'NEW_GAME':
            return initialState;
        case 'CLICK_SQUARE':
            return {
                ...state,
                ...clickSquare(state, action.payload)
            };
        case 'JUMP':
            return {
                ...state,
                ...jumpToStepNumber(state, action.payload)
            };
        case 'SORT':
            return {
                ...state,
                ...sort(state)
            };
        case 'SURRENDER': {
            let temp;

            if (action.payload.itsMine) {
                if (action.payload.youAre === 'x') {
                    temp = true;
                } else {
                    temp = false;
                }
            } else if (action.payload.youAre === 'x') {
                temp = false;
            } else {
                temp = true;
            }

            return {
                ...state,
                haveWinner: true,
                xIsNext: temp
            }
        }

        case 'DRAWN':
            return {
                ...state,
                haveWinner: true,
                isDrawn: true
            }

        case 'NEW_GAME_ONLINE': 
            return {
                ...state,
                ...createNewGameOnline(state, action.payload.youAre)
            }
        
        case 'UNDO': 
            return {
                ...state,
                ...undoPreAction(state)
            }

        case 'INVERT_PLAYING_OFFLINE_STATUS': 
            return {
                ...state,
                isPlayingOffline: !state.isPlayingOffline
            }
        case 'BOT_PLAY': 
            return {
                ...state,
                ...playByBot(state)
            }
        default:
            return state;
    }
}

export default GameReducer;