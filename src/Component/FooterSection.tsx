import * as React from 'react';
import darklogo from '../images/darklogo.svg'
import twitt from '../images/twitt.svg'
import instaa from '../images/instaa.svg'
import face from '../images/face.svg'
import linken from '../images/linken.svg'
// import line from '../images/line.svg'


export interface IFooterSectionProps {
}

export function FooterSection (props: IFooterSectionProps) {
    const data =[
        {
            up: "Why Scissor ?",
            first: "Scissor 101",
            second: "Integration & API",
            third : "Pricing"
        },
        {
            up:"Solution",
            first:"Social Media",
            second: "Digital Marketing",
            third:"Customer Service",
            fourth:"For Developers"

        },
        {
            up:"Products",
            first:"Link Management",
            second: "QR Codes",
            third:"Link-in-bio",
        },
        {
            up:"Company",
            first:"About Scissor",
            second: "Careers",
            third:"Partners",
            fourth:"Press",
            fifth:"Contact",
            sixth:"Reviews"
        },
        {
            up:"Resources",
            first:"Blog",
            second: "Resource Library",
            third:"Developers",
            fourth:"App Connectors",
            fifth:"Support",
            sixth:"Trust Center",
            seven:"Browser Extensions",
            eight:"Mobile App"
        },
        {
            up:"Features",
            first:"Branded Links",
            second: "Mobile Links",
            third:"Campaingn",
            fourth:"Management &",
            fifth:"Analytics",
            sixth:"QR Code generation"
        },
        {
            up:"Legal",
            first:"Privacy Policy",
            second: "Cookies Policy",
            third:"Terms of Service",
            fourth:"Acceptable Use Policy",
            fifth:"Code of Conduct",
        }
        
        
        
        
    ]
  return (
    <div className='bg-faqback bg-center bg-cover'>
        <div className='flex md:flex-row flex-col gap-40 px-5  md:px-60 py-20'> 
            <div className='flex flex-col gap-4'>
                <h1 className='flex text-2xl font-semibold gap-2 items-center '><img src={darklogo} alt='darklogo' /> <span className='w-0.5 h-5 bg-black '></span> SCISSOR  </h1>
                <div className='flex gap-4'>
                    <img src={twitt} alt='twitter' />
                    <img src={instaa} alt='twitter' />
                    <img src={linken} alt='twitter' />
                    <img src={face} alt='twitter' />
                </div>
                
             </div>
             <div className='grid grid-cols-4 gap-10'> 
                {data.map((item, i)=>(
                    <div>
                        <h1 className='font-bold'>{item.up} </h1>
                        <p>{item.first} </p>
                        <p>{item.second} </p>
                        <p>{item.third} </p>
                        <p>{item.fourth} </p>
                        <p>{item.fifth} </p>
                        <p>{item.sixth} </p>
                        <p>{item.seven} </p>
                        <p>{item.eight} </p>


                    </div>
                ))}
             </div>
        </div>
        <div className='flex gap-4  items-center justify-end font-medium pr-20 pb-10'> 
            <h1>Terms of Service </h1>
            <span className='w-0.5 bg-black h-5'></span>
            <h1>Security</h1>
            <span className='w-0.5 bg-black h-5'></span>
            <h1>Scissor 2023 </h1>
        </div>

      
    </div>
  );
}
