import * as React from 'react';
// import background from '../images/background.svg'

export interface IUrlFormProps {
}

export function UrlForm (props: IUrlFormProps) {
  return (
    <div className='bg-pattern w-full py-20 px-10 md:px-0bg-cover bg-center  flex mx-auto items-center justify-center   ' >
        <div className='bg-white rounded-xl md:w-[30%] py-5 '>
            <form className='py-5 md:px-10 gap-5 flex flex-col'>
                <input className='placeholder:text-primary placeholder:text-sm border  px-5  py-2 rounded-xl border-primary' type='text' placeholder='paste URL here...' />
                <div className='flex gap-2'> 
                    <select className='border text-primary border-primary bg-white px-5 py-2 rounded-xl'> Choose Domain
                        <option value="paid">Choose Domain</option>
                        <option value="paid">paid</option>
                        <option value="paid">paid</option>

                    </select>
                    <input  className=' placeholder:text-primary placeholder:text-sm border px-4 py-2 rounded-xl border-primary' type='text' placeholder='Type Alias here'/>
                </div>
                <button className='bg-primary px-5 py-2 text-white  rounded-xl'> Trim URL </button>
                
            </form> 
            <p className='text-primary px-6'> By clicking TrimURL, I agree to the <b>Terms of Service</b>, <b>Privacy Policy</b> and Use of Cookies.</p>

        </div>
    </div>
  );
}
