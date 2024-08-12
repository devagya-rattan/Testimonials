"use client";
import React, { useState } from "react";
import { IoMdThumbsUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { userProps } from "@/app/Signup/page";
import { auth, provider } from "../index";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";
interface YourComponentProps {
  userValues: userProps | null;
}
const Page: React.FC<YourComponentProps> = ({ userValues }) => {
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonials, setTestimonials] = useState("");
  const [text, setText] = useState<string>();
  const [back, setBack] = useState<string>();
  const [file, setFile] = useState<string | undefined>();
  const newcode = `
  // I am using tailwind Css for my project so.. First install tailwind css to your system and make changes as per your choices 😊😊. A pure javascript app must be used
  // use this handle change function above or before the return statement as the website is not deployed. for selecting images. also import usestate hook.
    const [file, setFile] = useState();
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }
  // use this handle change function above or before the return statement as the website is not deployed. for selecting images. also import usestate hook.


  <div className="render-change flex flex-col justify-center items-center w-1/3 h-5/6 rounded-3xl p-7" style={{ backgroundColor: ${back} }}>
              <div className="image-upload w-full h-full flex flex-col justify-center items-center">
                <input type="file" onChange={handleChange} />
                {file && (
                  <img
                    src=${file}  // This is not the deployed version of the website so the image will not be visible
                    alt="Uploaded"
                    className="user-image w-40 h-40 rounded-full"
                  />
                )}
              </div>
              <div
                className="testimonials w-full h-full flex flex-col justify-center items-center p-7 text-center text-xl"
                style={{ color: ${text} }}
              >
                ${testimonials}
              </div>
              <div className="name w-full h-full flex flex-col justify-center items-center text-xl capitalize">
                <h2 style={{ color: ${text} }}>${name}</h2>
                <h2 style={{ color: ${text} }}>${designation}</h2>
              </div>
    </div>
  
 
`;
  const toggleBtn = () => {
    setToggle(true);
    if (toggle === true) setToggle(false);
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const testimonialBackColors: string[] = [
    "#FF5733", // A vibrant red-orange
    "#33FF57", // A bright green
    "#3357FF", // A strong blue
    "#FF33A8", // A vivid pink
    "#F0E68C", // A soft khaki
  ];
  const textColors: string[] = [
    "#333333", // Dark grey
    "#3357FF", // White
    "#000000", // Black
    "#2C3E50", // Midnight blue
    "#8B0000", // Dark red
  ];
  // console.log(key);
  const changeTextcolor = (key: number) => {
    setText(textColors[key]);
  };
  const changeBackcolor = (key: number) => {
    setBack(testimonialBackColors[key]);
  };
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
  }
  const generateCode = () => {
    setCode(newcode);
  };
  return (
    <>
      <nav>
        {/* {userValues?.displayName} */}
        <div className="navbar flex flex-row justify-between content-center p-4 ">
          <div className="logo flex flex-row justify-centre basis-1/4 text-2xl">
            <IoMdThumbsUp className="icon-logo text-3xl" />
            <h1>Testimonials</h1>
          </div>
          <div className="pages flex flex-row justify-between content-center basis-1/3 text-lg">
            <div className={toggle ? "toggle" : "dropdown "}>
              <h2>ServicesA</h2>
              <h2>ServicesB</h2>
              <h2>ServicesC</h2>
              <h2>ServicesD</h2>
              <h2>ServicesE</h2>
            </div>
            <Link href="/Coustomers">
              <p>Coustomers</p>
            </Link>
            <IoIosArrowDown className="arrow-down" onClick={toggleBtn} />
            <Link href="/Features">
              <p>Features</p>
            </Link>
            <Link href="/Integrate">
              <p>About</p>
            </Link>
          </div>
          {userValues === null ? (
            <div className="register flex flex-row justify-center basis-1/4 text-lg gap-4">
              <button className="Signin">Sign In</button>
              <Link href="/Signup">
                <button className="Signup w-24">Sign Up</button>
              </Link>
            </div>
          ) : (
            <div className="user">
              <div className="user-info flex flex-row items-center gap-4">
                {userValues?.photoURL && (
                  <img
                    src={userValues?.photoURL}
                    className="user-image w-10 h-10 rounded-full"
                  />
                )}
                <h1>{userValues?.displayName}</h1>
              </div>

              <button onClick={handleSignOut} className="signout">
                Signout
              </button>
            </div>
          )}
        </div>
      </nav>
      {userValues === null ? (
        <div className="new-user flex flex-row justify-center items-center w-full h-screen p-7 text-3xl">
          First sign in to the website
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <h1 className="heading text-3xl">Create Your Testimonial</h1>
          <div className="creating-testimonials flex flex-row justify-around items-center w-full h-screen p-7">
            <div
              className="render-change flex flex-col justify-center items-center w-1/3 h-5/6 rounded-3xl p-7"
              style={{ backgroundColor: back }}
            >
              <div className="image-upload w-full h-full flex flex-col justify-center items-center">
                <input type="file" onChange={handleChange} />
                {file && (
                  <img
                    src={file}
                    alt="Uploaded"
                    className="user-image w-40 h-40 rounded-full"
                  />
                )}
              </div>
              <div
                className="testimonials w-full h-full flex flex-col justify-center items-center p-7 text-center text-xl"
                style={{ color: text }}
              >
                {testimonials}
              </div>
              <div className="name w-full h-full flex flex-col justify-center items-center text-xl capitalize">
                <h2 style={{ color: text }}>{name}</h2>
                <h2 style={{ color: text }}>{designation}</h2>
              </div>
            </div>
            <div className="change flex flex-col justify-around items-start w-1/3 gap-5 p-7">
              <div className="enter-name h-full w-full">
                <input
                  placeholder="Enter your Name"
                  className="w-full h-9 input-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="enter-name h-full w-full">
                <input
                  placeholder="Enter your designation"
                  className="w-full h-9 input-name"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
              <div className="enter-testimonials h-full w-full">
                <textarea
                  placeholder="Enter your reviews"
                  className="textarea-testimonials  w-full col-15"
                  value={testimonials}
                  onChange={(e) => setTestimonials(e.target.value)}
                ></textarea>
              </div>
              <div className="enter-colors flex flex-col justify-center items-start gap-5 h-full w-full">
                <div className="text-color flex flex-row gap-2">
                  <h3>Choose textcolor </h3>
                  {textColors.map((textcolor, key) => {
                    return (
                      <h6
                        key={key}
                        className="w-7 h-7 rounded-full"
                        style={{ backgroundColor: textcolor }}
                        onClick={() => changeTextcolor(key)}
                      ></h6>
                    );
                  })}
                </div>
                <div className="background-color flex flex-row gap-2">
                  <h3>Choose backgroundcolor</h3>
                  {testimonialBackColors.map((textcolor, key) => {
                    return (
                      <h6
                        key={key}
                        className="w-7 h-7 rounded-full"
                        style={{ backgroundColor: textcolor }}
                        onClick={() => changeBackcolor(key)}
                      ></h6>
                    );
                  })}
                </div>
                <div className="submit-test flex flex-row gap-2">
                  <button onClick={generateCode}>Generate code snippit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <SyntaxHighlighter language="typescript" style={coy}>
        {code}
      </SyntaxHighlighter>
    </>
  );
};

export default Page;
