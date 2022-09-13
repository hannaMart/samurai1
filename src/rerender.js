import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addMessage, addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
};
