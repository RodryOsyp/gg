import React from "react";
import style from "./Thank.module.css"
import { useLocation } from "react-router-dom";

const Thank = () => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const rating = id ? parseInt(id, 10) : null;
  return (
    <>
    <div className={style.square}>
     <div className={style.box}> <img src="https://cdn-icons-png.flaticon.com/512/4001/4001136.png" alt="" className={style.img} /></div>
     <div className={style.text}>Thank you!</div>
     <div className={style.raiting}>
     {rating && <p className={style.text3}>You selected {rating} out of 5</p>}
     </div>
     <div className={style.text2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia ut non praesentium ex beatae delectus? Quisquam eligendi at reiciendis quibusdam.</div>
    </div>
    </>
  );
};

export default Thank;