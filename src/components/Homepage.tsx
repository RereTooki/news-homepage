import "../App.css";
import logo from "../assets/images/logo.svg";
import iconmenu from "../assets/images/icon-menu.svg";
import iconmenuclose from "../assets/images/icon-menu-close.svg";
import imageweb3 from "../assets/images/image-web-3-mobile.jpg";
import imageweb3desktop from "../assets/images/image-web-3-desktop.jpg";
import list1img from "../assets/images/image-retro-pcs.jpg";
import list2img from "../assets/images/image-top-laptops.jpg";
import list3img from "../assets/images/image-gaming-growth.jpg";
import { useState } from "react";

const Homepage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible && (
        <div className="bg-white md:hidden w-3/6 nsm:w-[40%] h-screen fixed top-0 right-0 select-none hover:outline-none focus:outline-none">
          <div className="flex justify-between">
            <div></div>
            <img
              onClick={() => setIsVisible(false)}
              className="pt-[30px] pr-[20px] cursor-pointer hover:animate-pulse"
              src={iconmenuclose}
              alt="A clos button"
            />
          </div>
          <ul className="flex flex-col">
            <li className="px-[20px] pt-[80px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#home">Home</a>
            </li>
            <li className="px-[20px] pt-[20px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#new">New</a>
            </li>
            <li className="px-[20px] pt-[20px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Popular</a>
            </li>
            <li className="px-[20px] pt-[20px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Trending</a>
            </li>
            <li className="pl-[20px] pt-[20px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Categories</a>
            </li>
          </ul>
        </div>
      )}
      <div className="grid pr-[s40px] px-[35px] sm:spr-[30px] md:px-[55px] pt-[20px] overflow-hidden w-screen h-fit grid-cols-1 bg-off-whites select-none ">
        <div className=" flex justify-between w-auto h-auto pt-[10px] pb-[50px]">
          <img className="" src={logo} alt="A W logo" />
          <img
            onClick={() => setIsVisible(true)}
            className="md:hidden cursor-pointer"
            src={iconmenu}
            alt="A menu icon"
          />
          <ul className="flex flex-row vsm:hidden sm:hidden md:flex">
            <li className="px-[20px] pt-[10px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#home">Home</a>
            </li>
            <li className="px-[20px] pt-[10px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#new">New</a>
            </li>
            <li className="px-[20px] pt-[10px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Popular</a>
            </li>
            <li className="px-[20px] pt-[10px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Trending</a>
            </li>
            <li className="pl-[20px] pt-[10px] text-very-dark-blues hover:text-soft-reds hover:animate-pulse">
              <a href="#popular">Categories</a>
            </li>
          </ul>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-x-5 md:w-auto ">
          <div className="md:col-span-2  ">
            <div className="w-fit pb-[20px] ">
              <picture>
                <source media="(min-width: 720px)" srcSet={imageweb3desktop} />
                <img src={imageweb3} alt="" className="md:w-full" />
              </picture>
            </div>
            <div className="md:flex md:flex-row">
              <div className=" md:w-[50%] md:pr-[10px] w-auto pb-[10px] h-auto text-very-dark-blues leading-[58px] text-[52px] font-bold">
                <h1>The Bright Future of Web 3.0?</h1>
              </div>
              <div className="md:w-[50%] w-auto h-auto">
                <p className="text-black/80 pb-[20px]">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <div className=" pb-[50px]">
                  <button
                    className="text-off-whites w-auto py-[10px] px-[20px] tracking-widest bg-soft-reds hover:bg-very-dark-blues hover:animate-pulse "
                    type="submit"
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-start-3 md:w-auto pb-[25px] pt-[10px] px-[25px] h-auto divide-y divide-grayish-blues flex flex-col bg-very-dark-blues">
            <div>
              <h1 className="text-soft-oranges text-[35px] font-bold pb-[25px]">
                New
              </h1>
              <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px] md:text-[16px]  font-bold hover:text-soft-oranges">
                Hydrogen VS Electric Cars
              </h1>
              <p className="text-grayish-blues text-[15px] md:text-[14px] pb-[25px]">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className=" pt-[25px]">
              <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px] md:text-[16px] font-bold hover:text-soft-oranges">
                The Downsides of AI Artistry
              </h1>
              <p className="text-grayish-blues text-[15px] md:text-[14px] pb-[25px]">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>
            <div className=" pt-[25px]">
              <h1 className="whitespace-nowrap text-off-whites pb-[5px] text-[18px]  md:text-[16px]  font-bold hover:text-soft-oranges">
                Is VC Funding Drying Up?
              </h1>
              <p className="text-grayish-blues text-[15px] md:text-[14px] ">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row pb-[10px]">
          <div className="w-auto h-auto flex flex-row pt-[50px] pb-[20px]">
            <img
              className="w-[25%] md:w-[30%] h-[135px]"
              src={list1img}
              alt="A retro PC"
            />
            <div className="flex flex-col pl-[15px] w-[70%]">
              <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
                01
              </h1>
              <h2 className="text-very-dark-blues text-[18px] md:text-[12px] lg:text-[15px] whitespace-nowrap font-bold hover:text-soft-reds">
                Resolving Retro PCs
              </h2>
              <p className="text-black/80 text-[15px] ">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
          <div className="w-auto h-auto md:pl-[5px] flex flex-row pb-[20px] md:pt-[50px]">
            <img
              className="w-[25%] md:w-[35%] h-[135px]"
              src={list2img}
              alt="A retro PC"
            />
            <div className="flex flex-col pl-[15px]">
              <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
                02
              </h1>
              <h2 className="text-very-dark-blues text-[18px] md:text-[12px] lg:text-[15px] whitespace-nowrap font-bold hover:text-soft-reds">
                Top 10 Laptops of 2022
              </h2>
              <p className="text-black/80  text-[15px] ">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>
          <div className="w-auto h-auto md:pl-[5px] flex flex-row md:pt-[50px]">
            <img
              className="w-[25%] md:w-[55%] h-[135px]"
              src={list3img}
              alt="A retro PC"
            />
            <div className="flex flex-col pl-[15px]">
              <h1 className="text-grayish-blues text-[30px] font-bold pb-[25pxs]">
                03
              </h1>
              <h2 className="text-very-dark-blues text-[18px] md:text-[12px] lg:text-[15px] whitespace-nowrap font-bold hover:text-soft-reds">
                The Growth of Gaming
              </h2>
              <p className="text-black/80 text-[15px] ">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="attribution pb-[20px]  sm:text-[13px] md:text-[17px] md:font-normal md:whitespace-nowrap">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://linkedin.com/in/rerel-oluwa-tooki-b53396253/"
            target="_blank"
          >
            Rere Tooki
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Homepage;
