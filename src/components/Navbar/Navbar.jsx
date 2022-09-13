import React from 'react';
import styled from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = ({state}) => {
  return (
    <div className={styled.sideBar}>
      <nav className={styled.nav}>
        <div className={styled.item}>
          <NavLink to="/dialogues" className={navData => navData.isActive ? styled.active : styled.item}>Messages </NavLink>
        </div>
        <div className={styled.item}>
          <NavLink to="/profile" className={navData => navData.isActive ? styled.active : styled.item}>Profile</NavLink>
        </div>
        <div className={styled.item}>
          <NavLink to="/news" className={navData => navData.isActive ? styled.active : styled.item}>News </NavLink>
        </div>
        <div className={styled.item}>
          <NavLink to="/music" className={navData => navData.isActive ? styled.active : styled.item}>Music </NavLink>
        </div>
        <div className={styled.item}>
          <NavLink to="/settings" className={navData => navData.isActive ? styled.active : styled.item}> Settings </NavLink>
        </div>
      </nav>
      <div className={styled.friends}>
        <Friends friendsData={state.friendsData} />
      </div> 
    </div>   
  );
};

export default Navbar;
