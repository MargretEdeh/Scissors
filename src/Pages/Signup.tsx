import * as React from "react";
import { useState, FormEvent } from "react";
import { Button } from "../Component/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { FooterSection } from "../Component/FooterSection";

export interface ISignupProps {}

export function Signup(props: ISignupProps) {
  const navigate= useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    username: "",
    retypePassword: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      name: username,
      email: email,
      hashed_password: password,
      address: "string", 
      phone_number: "string",
    };

    try {
    setIsLoading(true);
      setErrors({ email: "", password: "", username: "", retypePassword: "" });
      const response = await fetch(
        "https://scissors-v0r0.onrender.com/api/v1/users/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        // Registration successful
        setIsLoading(false);
        navigate("/dashboard/create")

        console.log("Registration successful");
      }  {
        const data = await response.json();
        if (data.errors) {
          setErrors(data.errors);
        } else {
          console.error("Registration failed");
        }
      }
    } catch (error) {
      // Handle any network or server errors
      console.error("An error occurred during registration:", error);
    }
  };
  return (
    <div className="flex flex-col w-full  items-center justify-center  my-20">
      <div>
        <h1 className="text-center">Sign up with: </h1>
        <div className="flex gap-4">
          <button className="bg-primary py-1 px-2 rounded-md">Google</button>
          <button className="bg-primary py-1 px-2 rounded-md">Apple</button>
        </div>
        <div className="flex items-center justify-center mb-8">
          <div className="h-[1px] w-full bg-neutral-400"></div>
          <div className="mx-5 mb-1 mt-0.5 flex justify-center text-neutral-500">
            Or
          </div>
          <div className="h-[1px] w-full bg-neutral-400"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col w-full md:w-auto px-5 md:mx-0 ">
        <div className="flex gap-5 flex-col">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex border-2 border-primary px-5 py-3 rounded-md  md:w-[450px] "
            type="text"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-500" onClick={() => setErrors((prevErrors) => ({ ...prevErrors, username: "" }))}>
              {errors.username}
            </p>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex border-2 border-primary px-5 py-3 rounded-md  md:w-[450px] "
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="flex border-2 border-primary px-5 py-3 rounded-md  md:w-[450px] "
            type="password"
            placeholder="Password"
          />
          <input
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            className="flex border-2 border-primary px-5 py-3 rounded-md  md:w-[450px] "
            type="password"
            placeholder="Retype Password"
          />
          <p className="text-gray-500 -mt-5">
            6 or more characters, one number, one uppercase & one lower case.{" "}
          </p>
        </div>
        <Button children={isLoading ? "Signing up..." : "Sign up with Email"} color={true} className="my-5" />
      </form>
      <div className="mx-4 max-w-[600px] md:mx-8">
        <div className="flex justify-center text-neutral-500 my-4">
          Already have an account?{" "}
          <NavLink className="pl-1.5 underline text-primary" to="/signin">
            {" "}
            Log in
          </NavLink>
        </div>
        <div className="text-neutral-400 text-center text-xs">
          By signing in with an account, you agree to
          <br />
          Sciccor&apos;s{" "}
          <span className="text-neutral-500">
            Terms of Service, Privacy Policy
          </span>{" "}
          and <span className="text-neutral-500">Acceptable Use Policy.</span>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
