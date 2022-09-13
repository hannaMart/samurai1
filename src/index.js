import state from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { subscribe, addMessage, addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
};
rerender(state);
subscribe(rerender); //taken from state.js