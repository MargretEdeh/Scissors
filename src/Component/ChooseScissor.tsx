import * as React from "react";
import short from "../images/short.svg";
import qr from "../images/Qr.svg";
import edit from "../images/edit.svg";
import analytics from "../images/analytics.svg";

export interface IChooseScissorProps {}

export function ChooseScissor(props: IChooseScissorProps) {
    const data = [
        {
            icon: short,
            title:"URL Shortening",
            description:"Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects."
        },
        {
            icon: edit,
            title:"Custom URLs",
            description:"With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses."
        },
        {
            icon: qr,
            title:"QR Codes",
            description:"Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution."
        },
        {
            icon: analytics,
            title:"Data Analytics",
            description:"Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress."
        }
    ]
  return (
    <div className="my-20 flex md:flex-row  flex-col mx-10  md:mx-28">
      <div className="md:w-1/2 flex  flex-col gap-5">
        <h1 className="text-4xl text-center font-bold">
          Why choose <span className="text-primary"> Scissors </span>{" "}
        </h1>
        <p className=" w-full  md:w-1/2">
        Scissors is the hub of everything that has to do with your link
        management. We shorten your URLs, allow you creating custom ones for
        your personal, business, event usage. Our swift QR code creation,
        management and usage tracking with advance analytics for all of these is
        second to none.
        </p>
      </div>
      <div  className="grid gap-10 grid-cols-2 my-10 md:my-0  md:w-1/2">
        {data.map((item, index) => (
            <div className="flex flex-col gap-4 items-start">
                <img src={item.icon} alt="" />
                <h1 className="md:text-3xl font-semibold text-xl">{item.title}</h1>
                <p>{item.description}</p>
            </div>
        ))}

      </div>
    </div>
  );
}
