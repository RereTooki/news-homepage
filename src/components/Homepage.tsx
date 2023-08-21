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
      <div className="grid pr-[s40px] px-[15px] pt-[20px] overflow-hidden w-screen h-fit grid-cols-1 border-4 bg-off-whites">
        <div className=" flex justify-between w-auto h-auto pb-[20px]">
          <img className="" src={logo} alt="A W logo" />
          <img className="" src={iconmenu} alt="A menu icon" />
        </div>
        <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:w-3/5 ">
          <div className="w-fit h-auto pb-[20px] md:col-span-2">
            <picture>
              <source media="(min-width: 710px)" srcSet={imageweb3desktop} />
              <img
                src={imageweb3}
                alt=""
                className="md:w-full"
                //   width="screen"
                //   height="600"
                //   class="main__header-image"
              />
            </picture>
            {/* <img className="" src={imageweb3} alt="A web 3 image" /> */}
          </div>
          <div className="w-auto pb-[10px] h-auto text-very-dark-blues leading-[43px] text-[42px] font-bold">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="w-auto h-auto">
            <p className="text-grayish-blues pb-[20px]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className=" pb-[50px]">
              <button
                className="text-off-whites w-auto py-[10px] px-[20px] tracking-widest bg-soft-reds hover:bg-very-dark-blues "
                type="submit"
              >
                READ MORE
              </button>
            </div>
          </div>
        </div>
        <div className="w-auto  pb-[25px] pt-[10px] px-[25px] h-auto divide-y divide-grayish-blues flex flex-col bg-very-dark-blues">
          <div>
            <h1 className="text-soft-oranges text-[35px] font-bold pb-[25px]">
              New
            </h1>
            <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px] font-bold">
              Hydrogen VS Electric Cars
            </h1>
            <p className="text-grayish-blues text-[15px] pb-[25px]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className=" pt-[25px]">
            <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px] font-bold">
              The Downsides of AI Artistry
            </h1>
            <p className="text-grayish-blues text-[15px] pb-[25px]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className=" pt-[25px]">
            <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px] font-bold">
              Is VC Funding Drying Up?
            </h1>
            <p className="text-grayish-blues text-[15px] ">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row pt-[50px] pb-[20px]">
          <img className="w-[25%]" src={list1img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              01
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[18px]  whitespace-nowrap font-bold">
              Resolving Retro PCs
            </h2>
            <p className="text-grayish-blues text-[15px] ">
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row pb-[20px]">
          <img className="w-[25%]" src={list2img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              02
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[18px]  whitespace-nowrap font-bold">
              Top 10 Laptops of 2022
            </h2>
            <p className="text-grayish-blues text-[15px] ">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="w-auto h-auto flex flex-row">
          <img className="w-[25%]" src={list3img} alt="A retro PC" />
          <div className="flex flex-col pl-[15px]">
            <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
              03
            </h1>
            <h2 className="text-very-dark-blues pb-[5pxs] text-[18px] whitespace-nowrap font-bold">
              The Growth of Gaming
            </h2>
            <p className="text-grayish-blues text-[15px] ">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
        <div className="w-[80px] h-[80px]"></div>
      </div>
    </>
  );
};

export default Homepage;
