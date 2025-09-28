'use client';
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react";
import { Home } from "@/types/types";

const RecommendedPanel = ({homeData} : {homeData : Home[]}) => {

    const handleLike = () => {

    }

    return (
        <>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative left-0 w-full"
            > 
            <div className="px-[100px] py-[50px]">
            <div className="flex items-center justify-between h-[5vh] just">
                <h1 className="justify-start text-black font-bold text-[5vh]">
                    Homes <span className="underline">Just for You</span>
                </h1>
                <div className="flex w-auto h-[5vh] border border-black rounded-md text-nowrap justify-center items-center
                text-black px-[1%] font-outfit cursor-pointer hover:bg-white duration-300">
                    See Full Listing
                </div>

            </div>


            <div className="w-full h-auto grid gap-5 mt-10 [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))]">
                {homeData.map((home, i) => (
                    <div
                    key={i}
                    className="rounded-lg border border-black bg-white flex flex-col"
                    >
                    {/* Image */}
                    <div className="relative">
                        { /* Take only the first image presented of each home */ }
                        <Image
                        src={home.images[0].url} 
                        alt={home.address}
                        width={500}
                        height={300}
                        className="w-full h-[200px] object-cover rounded-t-lg border-b-2 border-black"
                        />
                    </div>

                    {/* Content */}
                    <div className="absolute flex border border-white rounded-full m-[20px] 
                    w-[40px] h-[40px] justify-center items-center hover:scale-[1.4] transition-all duration-300"
                    onClick={handleLike}>
                            <Heart color="red" fill="red"/>
                    </div>
                    <div className="flex flex-col justify-between flex-grow p-4">
                        <h1 className="font-poppins font-bold tracking-lg text-[28px] text-black">
                        ${home.price}
                        </h1>

                        <div className="flex items-center text-[14px] text-gray-600 divide-x divide-gray-900 text-nowrap -ml-[5px]">
                        <span className="px-2">{home.numberRooms} Bedrooms</span>
                        <span className="px-2">{home.numberBaths} Bathrooms</span>
                        <span className="px-2">{home.size} sqft</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-gray-700/70 ml-[15px] text-[14px] text-nowrap mb-4">
                        {home.mlsID}
                    </div>
                    </div>
                ))}
            </div>

            </div> 
        </motion.div>
        </>
    );
}

export default RecommendedPanel;