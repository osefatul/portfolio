import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./features/store"


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


const toggle = document.querySelector(".hover-show");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});


let Icons = document.querySelectorAll(".navigation .icon");


Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeActive();

    icon.classList.add("active-nav");
  });
});


function changeActive() {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}