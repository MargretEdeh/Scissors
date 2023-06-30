import * as React from "react";
import stroke from "../images/stroke.svg";
import boulder from "../images/boulder.svg"
import rings from "../images/rings.svg"
// import rec from "../images/rec.svg"
// import oval from "../images/oval.svg"
// import { Button } from "./Button";
import { NavLink } from "react-router-dom";

export interface IHeroSectionProps {}

export default function HeroSection(props: IHeroSectionProps) {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className=" my-20  md:w-[70%] w-full px-5 font-semibold  items-center justify-center gap-5 flex flex-col">
        <h1 className="px-2 text-center  md:px-0 text-3xl  md:text-5xl ">
          Optimize Your Online Experience with Our{" "}
        </h1>
        <h1 className="px-2 text-center text-4xl md:text-5xl">
          {" "}
          Advanced <span className="text-primary"> URL Shortening</span>{" "}
          Solution
        </h1>
        <img src={stroke} alt="Stroke" />
        <div className="font-normal text-center w-[65%]">
        <p>
          {" "}
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, branded links, and domain customization options
          to reinforce your brand presence and enhance user engagement.
        </p>
        </div>
        <div className="flex gap-5 my-4 font-normal">
             <NavLink className="rounded-3xl  px-7 py-3 bg-primary text-white" to='/signup'> Sign up </NavLink>
            <button className="text-primary">Learn more</button>
        </div>
        <div className="relative py-10  md:w-1/2">
        <img className="h-80  absolute top-0 right-[350px] -z-20 py-6" src={boulder} alt="background"/>
        <div className=" md:w-[450px] h-60 bg-white  border border-primary rounded-3xl  ">
          <div className="flex flex-col items-center gap-5 justify-center p-10">
          <img src={rings} alt="rings" className=" "/>
          <p className="font-normal text-center">
          Seamlessly transform your long URLs into concise and shareable links with just few clicks.
          </p>

          </div>
          
        </div>
        
      </div>
      {/* <div className="relative">
      
       <div className="w-200 slant h-100 bg-gray-700 transform skew-y-10 ml-2 mt-2"
    ></div>
            <img src={oval} alt="oval" className="  absolute  top-0 my-20  " />

            </div> */}
        
      </div>

    </div>
  );
}
