import styled from './../Dialogues.module.css';
import { NavLink } from 'react-router-dom';

const Dialogue = ({name, id, ava}) => {
    let path = "/dialogues/" + id;
    return ( 
        <div className={styled.dialogue}>
           <NavLink to={ path }>
            <div className={styled.ava}>
                <img src={ ava } alt="ava" />
            </div>
            { name }
           </NavLink>
       </div>
     );
}
export default Dialogue;