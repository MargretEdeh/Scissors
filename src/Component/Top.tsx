import * as React from 'react';
import {MdLogout} from "react-icons/md"
import { Button } from './Button';
import { AuthContext } from '../Context/ContextProvider';
import { RiLinksFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export interface ITopProps {
}

export function Top (props: ITopProps) {
const { setAccessToken} = React.useContext(AuthContext)
const navigate=useNavigate()
const handleLogout = () => {
    // Remove the access token from local storage
    localStorage.removeItem('accessToken');
    // Clear the access token in the context
    setAccessToken('');
    navigate('/signin')
  };

  return (
    <div className='flex items-center  justify-between shadow px-5 py-3 w-full'>
        <div className='flex gap-4' > 
            <input className='md:px-5 md:py-3 px-2 py-1 border w-4/5 border-primary lg:w-[500px] rounded-xl ' type="text" placeholder='Search Short url'/>
             <RiLinksFill className="md:text-5xl hidden md:flex text-2xl text-red-700" />

        </div>
        <div onClick={handleLogout} className='flex items-center gap-2'>
            <MdLogout className='md:text-2xl  text-red-700'/> 
            <Button className='hidden md:flex' children={"Logout"} color={true}/>
            <button className='bg-primary px-2 rounded-md py-1'>LogOut </button>
            
        </div>
      
    </div>
  );
}
