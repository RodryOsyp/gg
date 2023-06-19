import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AiFillStar } from "react-icons/ai";
import "./App.css";
import Button from "./Button/Button";


function App() {
  return (
    <>
      <div className="square">
        <div className="circle">
          <div className="star">
            <AiFillStar color="#F9710B" size={25} />
          </div>
        </div>
        <div className="header">How did we do?</div>
        <div className="header2">
          
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam iure
          expedita facilis?
        </div>
        <Button/>
      </div>
    </>
  );
}

export default App;
