import styled from './../Dialogues.module.css';
const Message = ({message, ava}) => {
    return ( 
        <div className={styled.message}>
                     <div className={styled.ava}>
                <img src={ ava } alt="ava" />
            </div>
           {message}
        </div>
     );
}

export default Message;