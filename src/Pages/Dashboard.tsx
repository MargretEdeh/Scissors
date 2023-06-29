import * as React from "react";
import SciLogo from "../images/sciLogo.svg";
import { BsLink } from "react-icons/bs";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BsQrCodeScan } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import {RxAvatar} from "react-icons/rx"
import { AuthContext } from "../Context/ContextProvider";


export interface IDashboardProps {}

export function Dashboard(props: IDashboardProps) {
  const {accessToken} = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState("");

  React.useEffect(() => {
    if(!accessToken){
      navigate('/signin');
    }
  }, [])
  React.useEffect(() => {
    fetchCurrentUser ();
  }, []);

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("https://scissors-v0r0.onrender.com/api/v1/users/me", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        const userData = await response.json();
        setCurrentUser(userData.name);
        // console.log();
        
      } else {
        throw new Error("Failed to fetch currently logged-in user");
      }
    } catch (error) {
      console.error("Failed to fetch currently logged-in user:", error);
    }
  };
  return (
    <div>
      <div className="flex w-full" >
        <div className="lg:w-72 border px-2 h-screen bg-cover bg-faqback">
          <div className="flex items-center px-5 py-3 gap-2" >
            <img src={SciLogo} alt="sciLogo" />
            <span className="w-0.5 h-8 hidden lg:flex bg-primary"></span>
            <h1 className="text-primary hidden lg:flex font-semibold text-2xl">SCISSOR</h1>
          </div>
          
          <div className="w-full">
           <button className="px-5 lg:w-3/4 flex  items-center lg:justify-center lg:gap-4 lg:text-lg text-xs my-10 shadow lg:mx-auto lg:py-2 text-white font-semibold bg-primary rounded-md"> <NavLink to="/dashboard/create"> Create <b className="lg:text-2xl text-lg ">+</b>  </NavLink> </button> 
        </div>
        <div > 
            <ul className="flex justify-center flex-col gap-5">
                <li> <NavLink to="/dashboard/links" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsLink className="text-2xl text-primary"/>  <p className="hidden lg:flex"> My Links </p> </NavLink> </li>
                <li> <NavLink to="/dashboard/qrcode" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsQrCodeScan className="text-2xl text-primary"/> <p className="hidden lg:flex"> QR codes </p> </NavLink> </li>
                <li> <NavLink to="dashboard/customlink" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsLink45Deg className="text-2xl text-primary"/> <p className="hidden lg:flex"> Customs Links</p>  </NavLink> </li>
            </ul>
        </div>
        <div className="flex flex-col my-20 items-center lg:justify-center">
            <RxAvatar className="lg:text-9xl text-4xl text-primary"/>
            <h1 className="lg:text-xl text-xs font-semibold">{currentUser} </h1>
          </div>
        </div>
        <div className="w-full   "> 
        <Outlet/>
        </div>

      </div>
    </div>
  );
}
