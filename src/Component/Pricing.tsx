import * as React from 'react';
import line from "../images/line.svg";
import { Box } from './Box';
import { Button } from './Button';

export interface IPricingProps {
}

export function Pricing (props: IPricingProps) {
  return (
    <div>
        <div className='flex flex-col my-20 mx-auto items-center justify-center'> 
            <h1 className='flex flex-col md:flex-row text-4xl md:gap-3 font-bold text-center'>
                <img className='hidden md:flex' src={line} alt="line" />  A  <span className='text-primary'> price perfect </span>  for your needs </h1>
                <p className=' md:w-1/3 px-3 md:px-0 text-center'> From catering for your personal, business, event, socials needs, you can be rest assured we have you in mind in our pricing.</p>
        </div> 
        <div className='my-30'> 
            <div className='flex md:flex-row flex-col gap-5 md:gap-0 justify-center items-center'>
                <Box  sub={"Basic"} top={"Free"} info={"Free plans for all users"} list1={"Unlimted URl Shortening"} list2={"Basic Link Analytics"} list3={"Customizable short links"} list4={"Standard support"} list5={"Ad-supported"} styles={true} className={"md:w-1/4 h-96"}/>
                <Box   sub={"Professional"} top={"$15/month"} info={"ideal for business creators"} list1={"Enhanced Link Analytics"} list2={"Custom Branded Domains"} list3={"Advance Links Customization"} list4={"Priority Support"} list5={"Ad-free Experince"} styles={false}  className={"md:w-1/4 bg-blue-950 items-start justify-center h-[35em]"}/>
                <Box   sub={"Basic"} top={"Free"} info={"Free plans for all users"} list1={"Unlimted URl Shortening"} list2={"Basic Link Analytics"} list3={"Customizable short links"} list4={"Standard support"} list5={"Ad-supported"} styles={true} className={"md:w-1/4 h-96 "}/>
            </div>
            <div className='flex items-center justify-center py-14 gap-5 '>
            <Button color={ false} children={"Get Custom Pricing"} />
            <Button color={true} children={"Select Pricing"}/>
            </div>
        </div>  
    </div>
  );
}
