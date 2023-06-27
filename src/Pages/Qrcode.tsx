import * as React from 'react';
import { BsQrCode } from 'react-icons/bs';

export interface IQrcodeProps {
}


export function Qrcode (props: IQrcodeProps) {
  return (
    <div className='flex flex-col gap-10 items-center my-20 '>
        <h1 className='text-4xl font-semibold text-primary '> Enhance user experience by enabling seamless access through a quick scan.</h1>
        <BsQrCode className='text-9xl text-primary'/>
    </div>
  );
}
