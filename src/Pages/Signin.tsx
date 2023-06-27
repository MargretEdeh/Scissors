import * as React from 'react';
import { useState, FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../Component/Button';
import { AuthContext } from '../Context/ContextProvider';
import { FooterSection } from '../Component/FooterSection';

export interface ISigninProps {
}

export function Signin (props: ISigninProps) {
    const { setAccessToken, accessToken } = React.useContext(AuthContext);
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const bodyParams = new URLSearchParams();
    bodyParams.append('grant_type', 'password');
    bodyParams.append('username', email);
    bodyParams.append('password', password);
    bodyParams.append('scope', 'scope');
    bodyParams.append('client_id', 'client_id');
    bodyParams.append('client_secret', 'client_secret');

    try {
      const response = await fetch('https://scissors-v0r0.onrender.com/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: bodyParams.toString(),
        });

      if (response.ok) {
        // Login successful
        console.log('Login successful');
        const data = await response.json();
        setAccessToken(data.access_token);
        navigate('/');
        console.log(data);
        console.log(accessToken);

        // Redirect or perform any other necessary actions
      } else {
        // Login failed
        console.error('Login failed');
        // Handle the error accordingly
      }
    } catch (error) {
      // Handle any network or server errors
        console.error('An error occurred during login:', error);
    }
  };
  return (
    <div>
        <section className="h-screen bg-white">
        <div className="flex h-full md:min-h-screen w-full flex-col items-center justify-start md:flex-row md:justify-center">
          <div className="order-1 flex h-fit w-full items-center justify-center md:order-2 md:h-full md:w-[45%]">
            <div className="my-auto w-[90%] rounded-xl py-10">
              <div className="h-full w-full overflow-y-auto">
                <div className="mx-auto w-[90%] max-w-[600px]">
                  <div>
                    <h1 className="mb-4 text-sm text-neutral-500 text-center">
                      Log in with:
                    </h1>
                  </div>
                  <div className="my-4 flex justify-center">
                    <div className="mr-6">
                      <button
                        className="flex items-center w-fit min-w-[6.8125rem] justify-center rounded bg-primary py-1.5 text-white transition duration-200 hover:scale-90 active:scale-100"
                      >
                        Google
                      </button>
                    </div>
                    <div>
                      <button
                        className="flex items-center w-fit min-w-[6.8125rem] justify-center rounded bg-primary py-1.5 text-white transition duration-200 hover:scale-90 active:scale-100"
                      >
                        
                        Apple
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mb-8">
                    <div className="h-[1px] w-full bg-neutral-400"></div>
                    <div className="mx-5 mb-1 mt-0.5 flex justify-center text-neutral-500">
                      Or
                    </div>
                    <div className="h-[1px] w-full bg-neutral-400"></div>
                  </div>
                  <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center' >
                  <div className='flex gap-5 flex-col'>
          <input value={email} onChange={(e)=> setEmail(e.target.value)}  className='flex border-2 border-primary px-5 py-3 rounded-md  w-[450px] ' type='email'  placeholder='Email' />
          <input value={password} onChange={(e)=> setPassword(e.target.value)}  className='flex border-2 border-primary px-5 py-3 rounded-md  w-[450px] ' type='password'  placeholder='Password' />
          <p className='text-gray-500 -mt-5'>6 or more characters, one number, one uppercase & one lower case. </p>
          </div>
          <Button children={'Sign in with Email'} color={true} className='my-5 w-10/12' />

                  
                  </form>
                </div>
                <div className="mx-4 max-w-[600px] md:mx-8">
                  <div className="flex justify-center text-neutral-500 text-sm my-4">
                    Don&apos;t have an account?{' '}
                    <NavLink
                      className="pl-1.5 underline text-primary"
                      to="/sign-up"
                    >
                      {' '}
                      Sign Up
                    </NavLink>
                  </div>
                  <div className="text-neutral-400 text-center text-xs">
                    By signing in with an account, you agree to
                    <br />
                    Sciccor&apos;s{' '}
                    <span className="text-neutral-500">
                      Terms of Service, Privacy Policy
                    </span>{' '}
                    and{' '}
                    <span className="text-neutral-500">
                      Acceptable Use Policy.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSection />
      </section>
    </div>
  );
}
