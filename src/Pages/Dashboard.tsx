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
  React.useEffect(() => {
    if(!accessToken){
      navigate('/signin');
    }
  }, [])
  return (
    <div>
      <div className="flex w-full" >
        <div className="w-72 border px-2 h-screen bg-cover bg-faqback">
          <div className="flex items-center px-5 py-3 gap-2" >
            <img src={SciLogo} alt="sciLogo" />
            <span className="w-0.5 h-8 bg-primary"></span>
            <h1 className="text-primary font-semibold text-2xl">SCISSOR</h1>
          </div>
          
          <div className="w-full">
           <button className="px-5 w-3/4 flex  items-center justify-center gap-4 text-lg my-10 shadow mx-auto py-2 text-white font-semibold bg-primary rounded-md"> <NavLink to="/dashboard/create"> Create <b className="text-2xl">+</b>  </NavLink> </button> 
        </div>
        <div > 
            <ul className="flex justify-center flex-col gap-5">
                <li> <NavLink to="/dashboard/links" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsLink className="text-2xl text-primary"/>  My Links  </NavLink> </li>
                <li> <NavLink to="/dashboard/qrcode" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsQrCodeScan className="text-2xl text-primary"/>  QR codes  </NavLink> </li>
                <li> <NavLink to="dashboard/customlink" className="flex text-primary  items-center text-lg gap-3 px-5 justify-start shadow py-3 " > <BsLink45Deg className="text-2xl text-primary"/>  Customs Links  </NavLink> </li>
            </ul>
        </div>
        <div className="flex flex-col my-20 items-center justify-center">
            <RxAvatar className="text-9xl text-primary"/>
            <h1 className="text-xl font-semibold">Hello user </h1>
          </div>
        </div>
        <div className="w-full   "> 
        <Outlet/>
        </div>

      </div>
    </div>
  );
}
