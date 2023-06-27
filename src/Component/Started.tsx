import * as React from 'react';
import { Button } from './Button';

export interface IStartedProps {
}

export function Started (props: IStartedProps) {
  return (
    <div className='bg-pattern bg-cover bg-center flex flex-col gap-5 py-20   items-center '>
        <h1 className='text-white text-2xl md:text-4xl font-semibold'> Revolutionizing Link Optimization</h1>
        <Button children={'Get started'} color={true}/>
      
    </div>
  );
}
