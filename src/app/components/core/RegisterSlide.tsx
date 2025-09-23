'use client'
import { SignUp } from "@clerk/nextjs"
import GoBackHomeButton from "@/app/components/misc/BackHomeButton"
import { motion } from "framer-motion"
import { useUser } from '@clerk/nextjs'
import { useEffect } from "react"
import { useRouter } from "next/navigation"

const RegisterSlide = () => {

    const { isSignedIn, isLoaded } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return 

        if (isSignedIn) {
            router.push("/dashboard?page=general")
        }
    }, [isSignedIn, router]) 

    if (!isLoaded) return <div className='flex w-full min-h-screen justify-center items-center text-[3vw] text-black'>Redirecting...</div>

    return (
        <>
        <div>

        </div>
        <GoBackHomeButton/>
        <div className="flex justify-between min-h-screen bg-black bg-[radial-gradient(circle_at_top_center,rgba(11,156,49,0.3),transparent_70%)]">
            <div className="flex w-[50vw] min-h-screen items-center justify-center">
                <div className="justify-items rounded-[30px] w-[45vw] h-[80vh] p-[5%]">
                    <h1 className="text-outfit text-[3vw] font-outfit font-semibold">
                        Find your next home <span className="text-green-300">Today</span>
                    </h1>
                    <div className="border border-white w-full"></div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.4, ease: "easeOut" }}
                        className="mt-[10%] h-auto w-auto"
                        > 
                        <h1 className="text-[1.8vw] font-outfit font-semibold pb-[5vh]">
                            Why Choose Us?
                        </h1>
                        <div className="flex flex-col pl-[3vw] gap-y-12">
                            {/* First Reason */}
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center w-[50px] h-[50px] aspect-[1/1] rounded-full border border-white/30 bg-neutral-950">
                                    <h1 className="text-[1.3vw] font-outfit">1</h1>
                                </div>
                                <p className="text-[1vw] font-outfit">
                                    We will help you find the best fit based on your preferences.
                                </p>
                            </div>
                            
                            {/* Second Reason */}
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center w-[50px] h-[50px] aspect-[1/1] rounded-full border border-white/30 bg-neutral-950">
                                    <h1 className="text-[1.3vw] font-outfit">2</h1>
                                </div>
                                <p className="text-[1vw] font-outfit">
                                    We compare possible places using real-time data to provide you <span className="text-green-300">the best</span> service.
                                </p>
                            </div>

                            {/* Three Reason */}
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center w-[50px] h-[50px] aspect-[1/1] rounded-full border border-white/30 bg-neutral-950">
                                    <h1 className="text-[1.3vw] font-outfit">3</h1>
                                </div>
                                <p className="text-[1vw] font-outfit">
                                    <span className="text-green-300">Your satisfaction matters to us</span>. Which is why we incorporate the latest AI technology for your search.
                                </p>
                            </div>

                            {/* Four Reason */}
                            <div className="flex items-center gap-5">
                                <div className="flex justify-center items-center w-[50px] h-[50px] aspect-[1/1] rounded-full border border-white/30 bg-neutral-950">
                                    <h1 className="text-[1.3vw] font-outfit">4</h1>
                                </div>
                                <p className="text-[1vw] font-outfit">
                                    We make it easy to update your preferences. Our mission is to find a lasting loving home for you. 
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Sign Up Panel */}
            <div className="flex justify-end items-center w-[50vw] min-h-screen px-[7.5vw]">
                <div className="rounded-[30px] bg-gray-600/20 border border-gray-500/40 w-[35vw] h-[80vh]">
                    <div className="flex justify-center items-center h-full ">
                        <SignUp
                        signInUrl="/auth/login"
                        afterSignUpUrl={"/dashboard?page=general"}
                        appearance={{
                            elements: {
                                formButtonPrimary: "bg-gradient-to-r from-green-700 to-green-300 font-outfit text-sm font-medium"
                            }
                        }
                        }/>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}


export default RegisterSlide;