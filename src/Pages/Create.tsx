import React, { useState } from 'react';
// import axios from 'axios';
import { AuthContext } from '../Context/ContextProvider';

export interface ICreateProps {}

export function Create(props: ICreateProps) {
  const {accessToken}= React.useContext(AuthContext)
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [alias, setAlias] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState('');

  const shortenUrl = async (e: React.FormEvent) => {
  e.preventDefault(); // Prevent the default form submission behavior

  setIsLoading(true);
console.log(accessToken);
console.log(url);
console.log(alias);

try {
  const response = await fetch('https://scissors-v0r0.onrender.com/api/v1/url/shorten', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      long_url: url,
      custom_url: alias,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    setShortenedUrl(data.shortUrl);
    console.log(data);
  } else {
    throw new Error('Failed to shorten URL');
  }
} catch (error) {
  console.error('Failed to shorten URL:', error);
}

setIsLoading(false);

};

  return (
    <div>
      <form onSubmit={shortenUrl} className="py-5 w-4/5 mx-auto my-32 md:px-10 gap-10 flex flex-col">
        <h1 className="text-3xl text-primary font-semibold">Create New Link</h1>
        <input
          className="placeholder:text-primary placeholder:text-sm border px-5 py-3 rounded-xl border-primary"
          type="text"
          placeholder="paste URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          className="placeholder:text-primary placeholder:text-sm border px-5 py-3 rounded-xl border-primary"
          type="text"
          placeholder="Title (Optional*)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex gap-2">
          <select className="border text-primary border-primary hover:bg-primary hover:text-white bg-white px-5 py-3 rounded-xl">
            <option className="hover:text-white hover:bg-primary" value="paid">
              Choose Domain
            </option>
            <option className="hover:text-white hover:bg-primary" value="paid">
              Scissor.com
            </option>
            <option className="hover:text-white hover:bg-primary" value="paid">
              paid
            </option>
          </select>
          <input
            className="placeholder:text-primary w-full placeholder:text-sm border px-4 py-3 rounded-xl border-primary"
            type="text"
            placeholder="Type Alias here"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
          />
        </div>
        <button
          className="bg-primary px-5 py-2 text-white rounded-xl"
          
          disabled={isLoading}
        >
          {isLoading ? 'Trimming...' : 'Trim URL'}
        </button>
        {shortenedUrl && (
          <div className="mt-4">
            <p>Shortened URL: {shortenedUrl}</p>
          </div>
        )}
      </form>
    </div>
  );
}
