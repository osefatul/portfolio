import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);






const toggle = document.querySelector(".hover-show");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});


let Icons = document.querySelectorAll(".navigation .icon");

function changeActive() {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}

Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeActive();

    icon.classList.add("active-nav");
  });
});


