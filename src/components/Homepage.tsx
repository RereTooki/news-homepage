import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-menu.svg";
import imageweb3 from "../assets/images/image-web-3-mobile.jpg";
import imageweb3desktop from "../assets/images/image-web-3-desktop.jpg";

const Homepage = () => {
  return (
    <>
      <div className="grid gap-[40px] h-fit grid-cols-1 border-4">
        <div className=" flex justify-between w-auto h-auto bg-soft-oranges">
          <img className="" src={logo} alt="A W logo" />
          <img className="" src={iconmenu} alt="A menu icon" />
        </div>
        <div className="w-auto h-auto bg-soft-oranges">
          <img className="" src={imageweb3} alt="A menu icon" />
        </div>
        <div className="w-auto h-auto text-very-dark-blues leading-[50px] text-[42px] font-bold bg-soft-oranges">
          <h1>The Bright Future of Web 3.0?</h1>
        </div>
        <div className="w-auto h-auto text-grayish-blues bg-soft-oranges">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
        </div>
        <div className="w-auto h-auto bg-soft-oranges">
          <button
            className="text-off-whites w-auto py-[10px] px-[20px] tracking-widest bg-soft-reds hover:bg-very-dark-blues "
            type="submit"
          >
            READ MORE
          </button>
        </div>
        <div className="w-auto h-auto text-grayish-blues bg-soft-oranges">
          <h1>New</h1>
        </div>
        <div className="w-[80px] h-[80px] bg-soft-oranges"></div>
        <div className="w-[80px] h-[80px] bg-soft-oranges"></div>
      </div>
    </>
  );
};

export default Homepage;
