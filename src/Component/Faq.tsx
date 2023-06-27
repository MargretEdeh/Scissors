import * as React from 'react';
import line from '../images/line.svg'
import plus from '../images/plus.svg'

export interface IFaqProps {
}

export function Faq (props: IFaqProps) {
  return (
    <div className='bg-faqback my-10 bg-cover flex flex-col bg-center  justify-center ' >
      <div className='flex flex-col justify-center gap-5 md:gap-7 md:mx-auto mx-5 md:w-[64%]'>
      <h1 className='flex gap-3 md:text-4xl font-bold justify-center my-10' > <img src={line} alt="line"/> FAQs </h1>
      <h1 className='flex justify-between text-xl'> How does URL shortening work? <img src={plus} alt='plus' /> </h1>
      <p className='text-base '> URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.
 </p>
 <hr/>
 <h1 className='flex justify-between text-xs  md:text-xl'>Is it necessary to create an account to use the URL shortening service? <img src={plus} alt='plus'/> </h1>
 <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> Are the shortened links permanent? Will they expire? <img src={plus} alt='plus'/> </h1>
 <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> Are there any limitations on the number of URLs I can shorten? <img src={plus} alt='plus'/> </h1>
 <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> Can I customize the shortened URLs to reflect my brand or content? <img src={plus} alt='plus'/> </h1>
 <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> Can I track the performance of my shortened URLs? <img src={plus} alt='plus'/> </h1>
      <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity? <img src={plus} alt='plus'/> </h1>
      <hr/>
 <h1 className='flex justify-between text-xs md:text-xl'> What is a QR code and what can it do?  <img src={plus} alt='plus'/>  </h1>
      <hr/>
  <h1 className='flex justify-between text-xs md:text-xl'> Is there an API available for integrating the URL shortening service into my own applications or websites? <img src={plus} alt='plus'/> </h1>
  <hr/>
    </div>
    </div>
  );
}
