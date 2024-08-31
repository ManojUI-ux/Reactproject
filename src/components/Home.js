import React from "react";
import videbg from"../Assets/images/Acer.mp4";
import "./style.css";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <>
      <div className="overlay "></div>
      <video src={videbg} autoPlay loop muted className="" />
      <div className="Vd ">
        <p className="text-white vd1">UPGRADE YOUR TECH</p>
        <p className="text-white vd1">UPGRADE YOUR LIFE</p>
        <div className="App">
          <Button variant="outline-light" className="mt-5 ">
            Explore More
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;


