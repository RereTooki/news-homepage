import React from "react";
import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-menu.svg";
import imageweb3 from "../assets/images/image-web-3-mobile.jpg";
import imageweb3desktop from "../assets/images/image-web-3-desktop.jpg";
import list1img from "../assets/images/image-retro-pcs.jpg";
import list2img from "../assets/images/image-top-laptops.jpg";
import list3img from "../assets/images/image-gaming-growth.jpg";

const Homepage = () => {
  return (
    <>
      <div className="grid gap-[40px] h-fit grid-cols-1 border-4">
        <div className=" flex justify-between w-auto h-auto bg-soft-oranges">
          <img className="" src={logo} alt="A W logo" />
          <img className="" src={iconmenu} alt="A menu icon" />
        </div>
        <div className="w-auto h-auto bg-soft-oranges">
          <img className="" src={imageweb3} alt="A web 3 image" />
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
        <div className="w-auto pb-[25px] pt-[10px] px-[25px] h-auto divide-y divide-grayish-blues flex flex-col bg-very-dark-blues">
          <div>
            <h1 className="text-soft-oranges text-[30px] font-bold pb-[25px]">
              New
            </h1>
            <h1 className="text-off-whites pb-[5px] text-[22px] font-bold">
              Hydrogen VS Electric Cars
            </h1>
            <p className="text-grayish-blues text-[18px] pb-[25px]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className=" pt-[25px]">
            <h1 className="text-off-whites pb-[5px] text-[22px] font-bold">
              The Downsides of AI Artistry
            </h1>
            <p className="text-grayish-blues text-[18px] pb-[25px]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className=" pt-[25px]">
            <h1 className="text-off-whites pb-[5px] text-[22px] font-bold">
              Is VC Funding Drying Up?
            </h1>
            <p className="text-grayish-blues text-[18px] ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row bg-soft-oranges">
          <img className="w-[25%]" src={list1img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              01
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[22px]  whitespace-nowrap font-bold">
              Resolving Retro PCs
            </h2>
            <p className="text-grayish-blues text-[18px] ">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row bg-soft-oranges">
          <img className="w-[25%]" src={list2img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              02
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[22px]  whitespace-nowrap font-bold">
              Top 10 Laptops of 2022
            </h2>
            <p className="text-grayish-blues text-[18px] ">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row bg-soft-oranges">
          <img className="w-[25%]" src={list3img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              03
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[22px]  whitespace-nowrap font-bold">
              The Growth of Gaming
            </h2>
            <p className="text-grayish-blues text-[18px] ">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
        <div className="w-[80px] h-[80px] bg-soft-oranges"></div>
      </div>
    </>
  );
};

export default Homepage;
