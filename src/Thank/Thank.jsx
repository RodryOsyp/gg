import React from "react";
import style from "./Thank.module.css"

const Thank = () => {
  return (
    <div className={style.square}>
     <div className={style.box}> <img src="https://cdn-icons-png.flaticon.com/512/4001/4001136.png" alt="" className={style.img} /></div>
     <div className={style.text}>Thank you!</div>
     <div className={style.text2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia ut non praesentium ex beatae delectus? Quisquam eligendi at reiciendis quibusdam.</div>
    </div>
  );
};

export default Thank;
