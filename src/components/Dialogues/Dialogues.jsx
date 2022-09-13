
import styled from './Dialogues.module.css';
import Dialogue from './Dialogue/Dialogue';
import Message from './Message/Message';
import React from 'react';

const Dialogues = ({state, addMessage}) => {

    let dialoguesElements = state.dialoguesData.map(dialogue => 
      <Dialogue id={dialogue.id} name={dialogue.name} ava={dialogue.ava} />);
    let messagesElements = state.messagesData.map(message => 
      <Message message={message.message} ava={message.ava}/>);
    
    let newMessage = React.createRef();
    let addMessageUI = () => {
        let messageText = newMessage.current.value;
        addMessage(messageText); 
    }

    return ( 
        <div className={styled.dialogues}>
            <div className={styled.dialoguesItems}>
                {dialoguesElements}
            </div>
            <div className={styled.messages}>
                { messagesElements }
                <textarea ref={ newMessage }/>
                <button onClick={ addMessageUI }>Send</button>
            </div>
        </div>
     );
}
 
export default Dialogues;