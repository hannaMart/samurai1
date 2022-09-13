import React from "react";
import "./App.css";
import  Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Dialogues from "./components/Dialogues/Dialogues";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = ({state, addPost, addMessage, updateNewPostText}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={state.sideBar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogues/*" 
                   element={<Dialogues state={state.dialoguesPage} addMessage={addMessage}/>} />
            <Route path="/profile" 
                   element={<Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
