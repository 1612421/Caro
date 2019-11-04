import React, { Component } from 'react';

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
        const { socket, socketId, addMessage, youAre, surrender, socketEventsIsCreated, invertSocketStatus } = this.props;
        if (!socketEventsIsCreated) {
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
                surrender({socketId: senderId, youAre});
            });

            invertSocketStatus();
        }

        this.scrollToBottom();
    }

    componentDidUpdate(){
        this.scrollToBottom();
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
                    <button className="chatbox__title__tray" type="button"> 
                        <span/>
                    </button>
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