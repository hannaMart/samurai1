import styled from "../../Navbar.module.css";
const Friend = ({ id, name, ava}) => {
    return ( 
        <div className={styled.oneFriend}>
        <div className={styled.ava}>
          <img src={ava} alt="ava" />
        </div>
          {name}
        </div>
     );
}
 
export default Friend;