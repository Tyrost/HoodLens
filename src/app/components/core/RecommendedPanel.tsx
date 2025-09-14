'use client';
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart } from "lucide-react";

const RecommendedPanel = () => {

    const handleLike = () => {

    }

    const homeData = [ // dummy home data
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        },
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        },
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        },
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        },
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        },
        {   
            price: "100,000",
            bedrooms: "4",
            bathrooms: "4",
            size: 4000,
            address: "1701 Best Lane, Eugene, OR, 97401",
            other: "MLS ID #7891838874812 Daniel Corzo",
            image: "/images/family.jpg"
        }
    ]

    return (
        <>
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative left-0 w-full"
            > 
            <div className="px-[100px] py-[50px]">
            <h1 className="text-black font-bold text-[48px]">
                Homes <span className="underline">Just for You</span>
            </h1>

            <div className="w-full h-auto grid gap-5 mt-10 [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))]">
                {homeData.map((home, i) => (
                    <div
                    key={i}
                    className="rounded-lg border border-black bg-white flex flex-col"
                    >
                    {/* Image */}
                    <div className="relative">
                        <Image
                        src={home.image}
                        alt={home.other}
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
                        <span className="px-2">{home.bedrooms} Bedrooms</span>
                        <span className="px-2">{home.bathrooms} Bathrooms</span>
                        <span className="px-2">{home.size} sqft</span>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-gray-700/70 ml-[15px] text-[14px] text-nowrap mb-4">
                        {home.other}
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