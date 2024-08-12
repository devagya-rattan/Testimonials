"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../index";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
// import Page from "../Navbar/Page";
export interface userProps {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

const page = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<userProps | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserData(currentUser);
    });

    return () => unsubscribe();
  }, []);
  const handleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUserData(result.user as userProps);
      console.log(result.user);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="form-details flex flex-row justify-center items-center h-screen mt-10">
        <form
          className="flex flex-col justify-between content-center w-1/3 h-1/2 p-7"
          onSubmit={handleSubmit}
        >
          <div className="classic-registration flex flex-col justify-between content-center gap-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-8 p-2"
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className="h-8 p-2"
            />
          </div>
          <div className="google-registration flex flex-row content-center w-full gap-2">
            <button
              className="google-signin w-1/2 p-2"
              onClick={handleSignin}
              type="button" // Changed to "button" to prevent form submission
            >
              Sign in with Google
            </button>
            <FcGoogle className="googleicon text-4xl" />
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
