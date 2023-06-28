import * as React from "react";
import { useState } from "react";
// import background from '../images/background.svg'
import { AuthContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";

export interface IUrlFormProps {}

export function UrlForm(props: IUrlFormProps) {
  const { accessToken } = React.useContext(AuthContext);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [alias, setAlias] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [customUrl, setCustomUrl] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const shortenUrl = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    setIsLoading(true);
    console.log(accessToken);
    console.log(url);
    console.log(alias);

    if (!accessToken) {
        setIsLoggedIn(true);
        setIsLoading(false);
        return;
      }
    

    

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
        console.log(data.short_url);
        navigate("/dashboard/links");
      } else {
        throw new Error("Failed to shorten URL");
      }
    } catch (error) {
      console.error("Failed to shorten URL:", error);
    }

    setIsLoading(false);

  };
  return (
    <div className="bg-pattern w-full py-20 px-10 md:px-0bg-cover bg-center  flex mx-auto items-center justify-center   ">
      <div className="bg-white rounded-xl md:w-[30%] py-5 ">
        <form onSubmit={shortenUrl} className="py-5 md:px-10 gap-5 flex flex-col">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="placeholder:text-primary placeholder:text-sm border  px-5  py-2 rounded-xl border-primary"
            type="text"
            placeholder="paste URL here..."
          />
          <div className="flex gap-2">
            <select className="border text-primary border-primary bg-white px-5 py-2 rounded-xl">
              {" "}
              Choose Domain
              <option value="paid">Choose Domain</option>
              <option value="paid">paid</option>
              <option value="paid">paid</option>
            </select>
            <input
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className=" placeholder:text-primary placeholder:text-sm border px-4 py-2 rounded-xl border-primary"
              type="text"
              placeholder="Type Alias here"
            />
          </div>
          <button
          className="bg-primary px-5 py-2 text-white rounded-xl"
          disabled={isLoading}
        >
          {isLoading ? "Trimming..." : "Trim URL"}
        </button>
        </form>
        <p className="text-primary px-6">
          {" "}
          By clicking TrimURL, I agree to the <b>Terms of Service</b>,{" "}
          <b>Privacy Policy</b> and Use of Cookies.
        </p>
      </div>
      {isLoggedIn && (
        <div className="flex flex-col items-center fixed top-0 left-0 w-full h-full bg-modal ">
          <div className="bg-white rounded-xl flex flex-col items-center px-20 py-20  p-10 my-32">
            <h2 className="text-3xl font-semibold text-primary ">
              Too Bad!! You  haven't signin/signup yet
            </h2>
            <FaRegSadCry className="text-9xl text-primary" />
            <p className="text-primary px-6">
              To use the link shortening functionality, <br/> please&nbsp; 
              <a href="/signin" className="text-primary underline">
               <b>sign in</b>
              </a>
              &nbsp;or&nbsp;
              <a href="/signup" className="text-primary underline">
                <b>sign up</b>
              </a>
              &nbsp;to create an account.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
