import React, { useState } from "react";
// import axios from 'axios';
import { AuthContext } from "../Context/ContextProvider";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Top } from "../Component/Top";

export interface ICreateProps {}

export function Create(props: ICreateProps) {
  const { accessToken } = React.useContext(AuthContext);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [alias, setAlias] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const closeModal = () => {
    setSuccess(false);
    navigate("/dashboard/links");

  }

  const shortenUrl = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setIsLoading(true);
    console.log(accessToken);
    console.log(url);
    console.log(alias);

    try {
      const response = await fetch(
        "https://scissors-v0r0.onrender.com/api/v1/url/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            long_url: url,
            custom_url: alias,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(data.short_url);
        setCustomUrl(data.custom_url);
        setSuccess(true);
        console.log(data.short_url);
      } else {
        throw new Error("Failed to shorten URL");
      }
    } catch (error) {
      console.error("Failed to shorten URL:", error);
    }

    setIsLoading(false);
  };

  return (
    <div>
      <Top/>
      <form
        onSubmit={shortenUrl}
        className="py-5 lg:w-4/5 mx-2 lg:my-32 my-14  md:px-10 gap-10 flex flex-col"
      >
        <h1 className="text-3xl text-primary font-semibold">Create New Link</h1>
        <input
          className="placeholder:text-primary placeholder:text-sm border my-3 md:px-5 md:py-3 px-3 py-2 rounded-xl border-primary"
          type="text"
          placeholder="paste URL here..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          className="placeholder:text-primary my-3 placeholder:text-sm border md:px-5 md:py-3 px-3 py-2 rounded-xl border-primary"
          type="text"
          placeholder="Title (Optional*)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="flex my-3 gap-2">
          <select className="border w-4/5 text-sm text-primary border-primary hover:bg-primary hover:text-white bg-white md:px-5 md:py-3 px-3 py-2 rounded-xl">
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
            className="placeholder:text-primary my-3 w-full placeholder:text-sm border md:px-4 md:py-3 px-3 py-2 rounded-xl border-primary"
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
          {isLoading ? "Trimming..." : "Trim URL"}
        </button>
        {shortenedUrl && (
          <div className="mt-4">
            <p>Shortened URL: {shortenedUrl}</p>
          </div>
        )}
      </form>
      {success && (
        <div className="flex flex-col items-center fixed top-0 left-0 w-full h-full bg-modal ">
          <div className="bg-white rounded-xl flex flex-col items-center px-20 py-20  p-10 my-32">
            <h2 className="text-3xl font-semibold text-primary ">
              URL Trimmed Successfully!
            </h2>
            <IoCheckmarkDoneOutline className="text-9xl text-primary" />
            <p className="font-semibold">
              Shortened URL   :
              <a className="text-primary"
                href={`https://scissors-v0r0.onrender.com/${shortenedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://scissors-v0r0.onrender.com/{shortenedUrl}
              </a>
            </p>
            <p className="font-semibold">
              Custom URL      :
              <a className="text-primary"
                href={`https://scissors-v0r0.onrender.com/${customUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                https://scissors-v0r0.onrender.com/{customUrl}
              </a>
            </p>
            <button className="px-5 text-white my-10 py-3 rounded-lg bg-primary shadow" onClick={closeModal}>View Your Trimmed Links </button>
          </div>
        </div>
      )}
    </div>
  );
}
