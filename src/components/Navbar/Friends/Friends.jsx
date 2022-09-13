import styled from "../Navbar.module.css";
import Friend from "./Friend/Friend";
const Friends = ({friendsData}) => {

    let friends = friendsData.map(friend => <Friend id={friend.id} name={friend.name} ava={friend.ava}/>)
    return ( 
        <div>
          <h2>Friends</h2>
          <div className={styled.friendsBlock}>{ friends }</div> 
        </div>
     );
}
 
export default Friends;