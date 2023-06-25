import React, { useState } from "react";
import style from "./Button.module.css";
import { Link, NavLink } from "react-router-dom";

const Button = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleClick = (buttonNumber) => {
    setSelectedButton(selectedButton === buttonNumber ? null : buttonNumber);
  };

  return (
    <>
      <div className={style.circle0}>
        {[1, 2, 3, 4, 5].map((buttonNumber) => (
          <div
            key={buttonNumber}
            className={style.circle}
            style={{
              backgroundColor: selectedButton === buttonNumber ? "#FC770E" : "",
            }}
            onClick={() => handleClick(buttonNumber)}
          >
            {buttonNumber}
          </div>
        ))}
      </div>

      <div className={style.plus}>
        <Link to={selectedButton ? `/Thank?id=${selectedButton}` : "/Thank"}>
          <div className={style.square}>
            <div className={style.submit}>SUBMIT</div>
          </div>
        </Link>
      </div>
    </>
  );
};
      
      


export default Button;