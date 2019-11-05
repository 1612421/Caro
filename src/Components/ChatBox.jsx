import React, { Component } from 'react';
import { toast } from 'react-toastify';
import confirm from '../utils/confirm';

import '../css/ChatBox.css';

const colorText = {
    color: 'white'
}

class ChatBox extends Component {

    constructor(props){
        super(props);
        this.textarea = React.createRef();
        this.messageEndRef = React.createRef();
    }

    componentDidMount(){
        const { socket, socketId, addMessage, youAre, surrender, 
            setDrawnGame, invertBusyStatus, createNewGameOnline, undoPreAction, haveWinner } = this.props;
        
        socket.on('message', (data) => {
            let message;
            
            if (data.socketId === socketId){
                message = {
                    message: data.message,
                    isMine: true
                }
            } else {
                message = {
                    message: data.message,
                    isMine: false
                }
            }

            addMessage(message);
        });

        socket.on('surrender', (senderId) => {
            surrender({itsMine: senderId === socketId, youAre});
            if (senderId !== socketId) {
                toast('Enemy surrendered');
            }
        });

        socket.on('enemy suggest drawn', () => {
            confirm('Enemy want to have a drawn game.\nDo you agree?', {
                title: 'Suggest drawn game',
                dismiss: () => {},
                okLabel: 'Yes',
                cancelLabel: 'No'
            }).then(() => {
                socket.emit('agree drawn');
            }, () => {
                socket.emit('disagree drawn');
            });
        });

        socket.on('disagree drawn', () => {
            toast.error('Ennemy disagree that the game is drawn.');
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        socket.on('drawn game', () => {
            setDrawnGame();
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        socket.on('enemy suggest new game', () => {
            confirm('Enemy want to have a new game.\nDo you agree?', {
                title: 'Suggest new game',
                dismiss: () => {},
                okLabel: 'Yes',
                cancelLabel: 'No'
            }).then(() => {
                socket.emit('agree new game');
            }, () => {
                socket.emit('reject new game');
            });
        });

        socket.on('new game', () => {
            toast.success('A new game is created');
            createNewGameOnline(youAre);
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        socket.on('enemy reject new game', () => {
            toast.error('Enemy reject new game');
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        socket.on('enemy suggest undo', () => {
            confirm('Enemy want to undo.\nDo you agree?', {
                title: 'Suggest undo',
                dismiss: () => {},
                okLabel: 'Yes',
                cancelLabel: 'No'
            }).then(() => {
                socket.emit('agree undo');
            }, () => {
                socket.emit('reject undo');
            });
        });

        socket.on('allow undo', () => {
            if (!haveWinner) {
                toast.success('Pre-action is undone');
                undoPreAction();
            }
            
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        socket.on('enemy reject undo', () => {
            toast.error('Enemy reject undo');
            const busyStatus = this.getBusyStatus();

            if (busyStatus) {
                invertBusyStatus();
            }
        });

        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
    }

    componentWillUnmount() {
        const { socket } = this.props;
        socket.removeEventListener('message');
        socket.removeEventListener('surrender');
        socket.removeEventListener('enemy suggest drawn');
        socket.removeEventListener('disagree drawn');
        socket.removeEventListener('drawn game');
        socket.removeEventListener('enemy suggest new game');
        socket.removeEventListener('new game');
        socket.removeEventListener('reject new game');
        socket.removeEventListener('enemy suggest undo');
        socket.removeEventListener('allow undo');
        socket.removeEventListener('reject undo');
    }

    getBusyStatus = () => {
        const { isBusy } = this.props;
        return isBusy;
    }

    scrollToBottom = () => {
        this.messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    handlePreviewKeyDown = (e) => {
        if (e.keyCode === 13 && e.ctrlKey){
            e.target.value += '\n';
            e.preventDefault();
        }
        else if (e.keyCode === 13){
            e.preventDefault();
            this.handleSendMessage(e.target.value.trim());
            e.target.value = "";
        }
    }

    handleSendMessage = (message) => {

        if (!message && message.length === 0){
            return;
        }

        const { socketId, socket } = this.props;
        const data = {
            message,
            socketId
        }

        socket.emit('message', data);
    }

    showMessages = () => {
        const { messages, myAvatar, enemyAvatar} = this.props;

        return messages.map((item, index) => {
            if (item.isMine) {
                return (
                    <div key={index} className="chatbox__body__message chatbox__body__message--right">
                        <img src={myAvatar} alt="My avatar"/>
                        <p>{item.message}</p>
                    </div>
                );
            }

            return (
                <div key={index} className="chatbox__body__message chatbox__body__message--left">
                    <img src={enemyAvatar} alt="Enemy avatar"/>
                    <p>{item.message}</p>
                </div>
            );
        });
    }

    render() { 
        const { shouldShowChatBox, invertShouldShowChatBox, enemyUsername } = this.props;

        return (  
            <div ref={this.chatBox} className={`chatbox ${!shouldShowChatBox && 'chatbox--tray'}`}>
                <div className="chatbox__title" onClick={invertShouldShowChatBox} role="button">
                    <h5 style={colorText}>{enemyUsername}</h5>
                </div>
                <div className="chatbox__body">
                    {
                        this.showMessages()
                    }   
                    <div ref={this.messageEndRef}/>
                </div>
                <textarea ref={this.textarea}  className="chatbox__message" placeholder="Write something interesting" onKeyDown={this.handlePreviewKeyDown}/>
            </div>
        );
    }
}
 
export default ChatBox;