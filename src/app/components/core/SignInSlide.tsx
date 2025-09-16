"use client";

import { SignIn, useAuth, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Logo from "../misc/Logo";
import GoBackHomeButton from "../misc/BackHomeButton";

const SignInSlide = () => {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-900">
      <p className="text-white text-lg font-outfit">Loading...</p>
    </div>
  );

  return (
    <>

    <GoBackHomeButton/>

    <div className="flex justify-center items-center min-h-screen bg-neutral-900 p-4">
      <div className="flex shadow-2xl bg-neutral-800 border border-gray-700 w-[90vw] max-w-6xl h-[80vh] rounded-3xl overflow-hidden">
        
        <div className="w-[45%] h-full relative bg-gradient-to-br from-blue-600 to-purple-700">
          <Image
            src={"/images/child.jpg"}
            alt="Welcome image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="absolute bottom-0 text-white w-full  bg-black/60">
            <div className="flex justify-center -m-[5vh]">
                <Logo path="/logo/FullWhite.png" size={250} cursor={false}/>
            </div>
          </div>
        </div>

        <div className="w-[55%] h-full bg-neutral-800 flex flex-col items-center justify-center p-12 relative">
          
          <div className="absolute top-0 right-0 w-[60%] h-[45%] bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-purple-500/10 to-pink-500/20 rounded-full blur-3xl"></div>

          <SignedOut>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <div className="text-center mb-[2vh]">
                <h1 className="text-3xl font-bold text-white my-[2vh]">Sign In</h1>
                <p className="text-gray-400">Welcome back to HoodLens</p>
              </div>
              
              <div className="bg-neutral-700/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-600/50">
                <SignIn 
                  signUpUrl="/auth/register"
                  appearance={{
                    elements: {
                        formButtonPrimary: "bg-gradient-to-r from-green-700 to-green-300 font-outfit text-sm font-medium"
                    }
                  }}
                  afterSignOutUrl={"/"}
                />
              </div>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                <p className="text-gray-400 mb-6">You are successfully signed in</p>
              </div>
              
              <div className="bg-neutral-700/50 p-6 rounded-2xl backdrop-blur-sm border border-gray-600/50">
                <p className="text-gray-300 mb-6">Signed in as: <span className="text-blue-400 font-medium">{userId}</span></p>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-12 h-12 ring-2 ring-blue-500/50 hover:ring-blue-400 transition-all duration-200"
                    }
                  }}
                  signInUrl="/dashboard"
                />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignInSlide;