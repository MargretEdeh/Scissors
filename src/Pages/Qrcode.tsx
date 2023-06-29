import React, { useState, useEffect } from 'react';
import { BsQrCode } from 'react-icons/bs';
import QRCode from 'qrcode.react';
import darklogo from "../images/darklogo.svg"
import { Top } from '../Component/Top';

export interface IQrcodeProps {}

export function Qrcode(props: IQrcodeProps) {
  const [url, setUrl] = useState('');
  const [qrCodes, setQrCodes] = useState<string[]>([]);

  useEffect(() => {
    const storedQrCodes = localStorage.getItem('qrCodes');
    if (storedQrCodes) {
      setQrCodes(JSON.parse(storedQrCodes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQrCodes = [...qrCodes, url];
    setQrCodes(newQrCodes);
    localStorage.setItem('qrCodes', JSON.stringify(newQrCodes));
    setUrl('');
  };

  return (
    <div>
      <Top/>
      <div className='flex flex-col  gap-4 items-center my-5 px-2 md:my-20'>
        <h1 className='md:text-3xl text-sm text-center font-semibold text-primary'>
          Enhance user experience by enabling seamless access through a quick scan.
        </h1>
        <BsQrCode className='md:text-5xl text-3xl text-primary' />
      </div>
      <div className='flex px-2 '>
        <form  onSubmit={handleSubmit}>
          <p className='text-xs'>Enter Your Link</p>
          <input
            className='border border-primary rounded-md lg:w-[400px]  py-3 px-3'
            type='text'
            placeholder='enter link'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type='submit' className='bg-primary mx-5 text-white rounded-md px-4 py-2 mt-2'>
            Generate QR Code
          </button>
        </form>
      </div>

        <div className='md:grid  items-center lg:grid-cols-6 my-10 gap-10'>
          {qrCodes.map((qrCode, index) => (
            <div key={index} className='mb-4 w-full px-2'>
              <QRCode
                id={`qrCodeId-${index}`}
                value={qrCode}
                bgColor='white'
                fgColor='blue'
                level='H'
                imageSettings={{
                  src: darklogo,
                  excavate: true,
                  width: 500 * 0.1,
                  height: 500 * 0.1
                }}
              />
            </div>
          ))}
        </div>
    </div>
  );
}
