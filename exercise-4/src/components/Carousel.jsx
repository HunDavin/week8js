import React from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = ({ images }) => {
  /* You will need to  use  state to mnage the current image */
  const[Current,setCurrent]=useState(0);


  /* You will need to hanle the click on left and right button */
  const handleClickLeft=()=>{
    checkFirstPage();
    setCurrent(Current -1);
  }
  const HandleClickRight=()=>{
    checkLastPage();
    setCurrent(Current +1);

  }

  /* You will need to manage the cases when we are on the last image or first image*/
  

  return (
    <div className="carousel">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handleClickLeft} />

      {/* YOu will need to display the current image, not the first one.. */}
      <img src={images[Current].src} alt={images[Current].alt} className="slide" />

      <BsArrowRightCircleFill className="arrow arrow-right" onClick={HandleClickRight} />
      {console.log(Current)}
      
    </div>
  );
};
