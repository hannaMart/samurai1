import React from "react";
import styled from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = ({posts, addPost, updateNewPostText, newPostText}) => {

  let PostsElements = posts.map(post => 
     <Post likesCount={post.likesCount} message={post.message} />)
  
  let newPostElement = React.createRef();  
    
  let addPostUI = () => {
    addPost();
  };
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={styled.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}
                  onChange={onPostChange}
                  value={newPostText}
        />
      </div>
      <div>
        <button onClick={addPostUI}>Add post</button>
      </div>
      <div className={styled.posts}>
        { PostsElements }
      </div>
    </div>
  );
};

export default MyPosts;
