import * as React from 'react';

export interface IDescriptionProps {
}

export function Description (props: IDescriptionProps) {
    const data = [
        {value:"3M", description:"Active users"},
        {value:"60M", description:"Links and QR codes created"},
        {value:"1B", description:"Clicked and scanned connections"},
        {value:"300k", description:"App integrations"},

    ]
  return (
    <div className='my-10 bg-gray-100 py-10 '>
      <div className='flex md:flex-row flex-col justify-between mx-10 md:mx-28 my-10'>
        <div className='text-4xl font-bold '>
            <p > One Stop.</p>
            <p className='flex gap-5'> Four <span className='text-primary'>Possibilities </span></p>
        </div>
        <div className='flex gap-2 py-4 md:py-0 md:gap-10 '>
            {data.map((item, index) => (
                <div key={index} className='flex  flex-col'> 
                    <p className='md:text-3xl text-xl  font-semibold'>{item.value}</p>
                    <p className='text-sm w-20 md:w-32'>{item.description}</p>
                </div>
                        ))}

        </div>
      </div>
    </div>
  );
}
