import * as React from 'react';
import check from "../images/check.svg";
import check2 from "../images/check2.svg";

export interface IBoxProps {
    sub: string;
    top: string;
    info: string;
    className?: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    list5: string;
    styles?: boolean;
}

export function Box (props: IBoxProps) {
    const {sub, top, info ,styles, className, list1, list2, list3, list4, list5 }= props;
  return (
    <div className={`border flex flex-col   border-primary px-20 rounded-2xl py-3 ${className} ${styles ? 'text-black': 'text-white'}`}>
        <h1 className='text-xl py-2'>{sub} </h1>
        <h1 className='text-4xl py-2 font-bold'>{top} </h1> 
        <p className='text-base mb-4 '>{info} </p>
        <ul className=' flex  gap-5 flex-col' >
            <li className='flex gap-3 items-center'> { styles ? <img src={check} alt="check" /> : <img src={check2} alt='check' />} {list1}</li>
            <li className='flex gap-3 items-center'> { styles ? <img src={check} alt="check" /> : <img src={check2} alt='check' />} {list2}</li>
            <li className='flex gap-3 items-center'> { styles ? <img src={check} alt="check" /> : <img src={check2} alt='check' />} {list3}</li>
            <li className='flex gap-3 items-center'> { styles ? <img src={check} alt="check" /> : <img src={check2} alt='check' />} {list4}</li>
            <li className='flex gap-3 items-center'> { styles ? <img src={check} alt="check" /> : <img src={check2} alt='check' />} {list5}</li>
        </ul>
      
    </div>
  );
}
