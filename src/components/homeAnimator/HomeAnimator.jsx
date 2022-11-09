import "./HomeAnimator.css";
// import img from "../props/img2.jpg";
import img1 from "../props/p1.jpg";
import img2 from "../props/p2.jpg";

import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";

function Home() {
  return (
    <div className="home-container mt-[50px] sm:mt-20 flex justify-center">
      <div className="Piclogo">
        <div className="hover-show active">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img className="" src={img2} alt="" />
      </div>
    </div>
  );
}

export default Home;
