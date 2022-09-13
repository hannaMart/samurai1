import React from "react";
import styled from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePage, addPost, updateNewPostText}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts 
          posts={profilePage.posts}
          newPostText={profilePage.newPostText}
          addPost={addPost} 
          updateNewPostText={updateNewPostText}/>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  );
};

export default Profile;
