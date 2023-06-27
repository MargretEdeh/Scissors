import * as React from 'react';
import { useState } from 'react';
import sciLogo from "../images/sciLogo.svg"
import { NavLink } from 'react-router-dom';
import { Button } from './Button';
import { Icon } from '@iconify/react';

export interface INavBarProps {
}

export function NavBar (props: INavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const cancel = ()=>{
    setIsMenuOpen(false)
  }
  return (
    <div className='md:mx-20 mx-5 items-center justify-between flex my-5 md:justify-between md:items-center ' >
        <div className='flex gap-2'> 
            <img src={sciLogo} alt="logo"/>
            <span className='w-0.5 h-8 bg-primary'></span>  
            <h1 className='text-primary font-semibold text-2xl'>SCISSOR</h1>
        </div>
        <div className=' hidden md:flex gap-5 text-lg '>
            <NavLink to="#" className="hover:text-primary "> MyURLs </NavLink>
            <NavLink to="#" className="hover:text-primary "> Features </NavLink>
            <NavLink to="#" className="hover:text-primary "> Pricing</NavLink>
            <NavLink to="#" className="hover:text-primary "> Analytics </NavLink>
            <NavLink to="#" className="hover:text-primary "> FAQs</NavLink>

        </div>
        <div className='md:flex hidden   gap-4'>
            <button className='text-primary'> Log in</button>
            <Button> Try for free</Button>            
        </div>
        <Icon onClick={toggleMenu} className='md:hidden    text-3xl' icon="ic:outline-menu" color="#0065fe" />
       {isMenuOpen &&  <Icon  onClick={cancel} className='md:hidden hover:animate-bounce z-50 text-3xl' icon="fluent-mdl2:cancel" color="#fff" />}
      
        {isMenuOpen && (
        <div className='md:hidden duration-300 transition-all w-full gap-2 items-center text-white  font-medium flex flex-col  px-10 py-10 bg-primary absolute left-0 top-0'>
          <NavLink to="#" className="block hover:text-primary">MyURLs</NavLink>
          <NavLink to="#" className="block hover:text-primary">Features</NavLink>
          <NavLink to="#" className="block hover:text-primary">Pricing</NavLink>
          <NavLink to="#" className="block hover:text-primary">Analytics</NavLink>
          <NavLink to="#" className="block hover:text-primary">FAQs</NavLink>
          <button className='text-white border px-3 py-1 rounded-2xl'>Log in</button>
          <Button>Try for free</Button>
        </div>
      )}
      
    </div>
  );
}
