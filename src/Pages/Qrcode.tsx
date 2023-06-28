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
      <div className='flex gap-4 items-center my-20'>
        <h1 className='text-3xl font-semibold text-primary'>
          Enhance user experience by enabling seamless access through a quick scan.
        </h1>
        <BsQrCode className='text-5xl text-primary' />
      </div>
      <div className='flex '>
        <form  onSubmit={handleSubmit}>
          <p className='text-xs'>Enter Your Link</p>
          <input
            className='border border-primary rounded-md w-[400px]  py-3 px-3'
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

        <div className='grid grid-cols-4 my-10 gap-10'>
          {qrCodes.map((qrCode, index) => (
            <div key={index} className='mb-4'>
              <QRCode
                id={`qrCodeId-${index}`}
                size={300}
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
