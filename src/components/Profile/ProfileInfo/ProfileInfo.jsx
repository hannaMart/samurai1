import React from "react";
import styled from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://zlavomat.sgcdn.cz/images/t/944x472c/34/72/3472522-04f75c.jpg"></img>
      </div>
      <div className={styled.info}>ava+descr</div>
    </div>
  );
};

export default ProfileInfo;
