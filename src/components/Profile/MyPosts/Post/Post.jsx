import React from "react";
import styled from "./Post.module.css";
import myAva from "../../../../images/AVA.jpg";

const Post = ({ message, likesCount }) => {
  return (
    <div className={styled.item}>
      <div className={styled.onePost}>
        <img src={ myAva } />
        <span>{message}</span>
      </div>
      <div>
        <span>Likes: </span>
        {likesCount}
      </div>
    </div>
  );
};

export default Post;
