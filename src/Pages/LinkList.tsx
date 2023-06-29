import React, { useEffect, useState } from "react";
import { AuthContext } from "../Context/ContextProvider";
import { RiLinksFill } from "react-icons/ri";
import { IoTrashBin } from "react-icons/io5";
import { Top } from "../Component/Top";


export interface ILinkListProps {}

export function LinkList(props: ILinkListProps) {
  const { accessToken } = React.useContext(AuthContext);
  const [links, setLinks] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    fetchCurrentUser ();
  }, []);
  const fetchLinks = async () => {
    try {
      const response = await fetch(
        "https://scissors-v0r0.onrender.com/api/v1/url/list-loggedin-user-url",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setLinks(data);
      } else {
        throw new Error("Failed to fetch links");
      }
    } catch (error) {
      console.error("Failed to fetch links:", error);
    }
  };
  

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("https://scissors-v0r0.onrender.com/api/v1/users/me", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        const userData = await response.json();
        setCurrentUser(userData.name);
        fetchLinks();
        // console.log();
        
      } else {
        throw new Error("Failed to fetch currently logged-in user");
      }
    } catch (error) {
      console.error("Failed to fetch currently logged-in user:", error);
    }
  };
  

  const deleteLink = async (shortUrl: string) => {
    try {
      // const encodedUrl = encodeURICompone nt(`https://scissors-v0r0.onrender.com/${shortUrl}`);
      const deleteUrl = `https://scissors-v0r0.onrender.com/api/v1/url/delete/${shortUrl}?url=${shortUrl}`;
  
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        // Link deleted successfully
        console.log("Link deleted successfully");
        // Remove the deleted link from the state
        const updatedLinks = links.filter((link: any) => link.short_url !== shortUrl);
        setLinks(updatedLinks);
      } else {
        throw new Error("Failed to delete link");
      }
    } catch (error) {
      console.error("Failed to delete link:", error);
    }
  };
  
  
  

  return (
    <div>
      <Top/>
      <div className="flex flex-col px-2 lg:items-center gap-3">
        <h2 className="md:text-3xl text-xl font-semibold  mt-10 text-primary">
          Previously Created Links{" "}
        </h2>
        {/* <RiLinksFill className="text-5xl text-red-700" /> */}
      <p className="text-xs"> <b className="text-red-700 text-xs "> Note</b> : The main domain is " https://scissors-v0r0.onrender.com/"</p>

      </div>
      <hr/>
      <h1 className="md:text-lg px-2 my-10">Hello<b className="text-primary md:text-xl"> {currentUser} </b>,  your Links are displayed below </h1>

      <ul className="md:grid lg:grid-cols-3 flex flex-col gap-5   " >
        {links.map((link: any) => (
            <div className="flex  w-60 flex-col lg:w-full hover:bg-blue-50 shadow shadow-blue-100 rounded-lg border py-5 px-4 gap-3 md:gap-5">
           <div className="flex items-center gap-2">  
            <h1 className="  font-semibold text-xs md:text-base">Short Url: </h1>   
         <li className="shadow py-2 px-5 rounded-xl cursor-pointer" key={link.id}>
                <a
               href={'https://scissors-v0r0.onrender.com/' + link.short_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-xs md:text-sm lg:text-lg"
                >
                {link.short_url}
                </a>
            </li>
            </div>
            <div className="flex items-center gap-2">
            <h1 className="font-semibold text-xs md:text-base ">Custom Url: </h1>
            <li className="bg-primary px-5 py-2  rounded-xl cursor-pointer " key={link.id}>
                <a
                href={'https://scissors-v0r0.onrender.com/' +  link.custom_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white md:text-lg"
                >
                {link.custom_url}
                </a>            </li>
            <IoTrashBin
            onClick={() => deleteLink( link.short_url)}
             className="text-3xl text-red-700  ml-10 lg:ml-32 cursor-pointer" />


            </div>
            </div>

        ))}
      </ul>
    </div>
  );
}
