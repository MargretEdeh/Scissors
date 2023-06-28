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
            <input className='px-5 py-3 border border-primary w-[500px] rounded-xl ' type="text" placeholder='Search Short url'/>
             <RiLinksFill className="text-5xl text-red-700" />

        </div>
        <div onClick={handleLogout} className='flex items-center gap-2'>
            <MdLogout className='text-2xl text-red-700'/> 
            <Button children={"Logout"} color={true}/>

            
        </div>
      
    </div>
  );
}
