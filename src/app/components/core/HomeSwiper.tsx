import React from "react";
import Slideshow from "../misc/Slideshow";
import { Home } from "@/types/types";
import { X, Check } from "lucide-react";

const HomeSwiper = ({homeList} : {homeList : Array<Home>}) => {

    if (homeList.length === 0) {
        return (
            <div>
                No Homes Available
            </div>
        )
    }

    const home = homeList[0]

    const handleDiscard = () => {

    }

    const handleAccept = () => {

    }

    const advertisementType = () => {
        switch(home.type) {
            case "House":
                return "Home for Sale"
            case "Apartment":
                return "Apartment for Rent"
            default:
                return "Property listing" // fallback
        }
    }

    return (
        <> 
        <div className="py-[20px]">
            <div className="w-full h-full flex border border-t-black border-b-black border-2">
                <div className="flex justify-start items-center w-[70%] px-[2vw] bg-white">
                    <div className="relative h-[80vh] w-[100%]">
                        <Slideshow slides={home.images} arrows={false}/>
                        <div className="absolute bottom-4 left-4 ">
                            <h1 className="text-[80px] text-white font-geist font-bold drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,0.8)]">
                                ${home.price.toLocaleString()}
                            </h1>
                        </div>

                        <div className="absolute flex justify-center items-center left-8 top-1/2 -translate-y-1/2
                        rounded-full bg-white/20 border border-gray-300/10 w-[80px] h-[80px] hover:bg-red-300/80 hover:border-black/60 hover:scale-[1.2] hover:cursor-pointer transition-all duration-500">
                            <X color="red" className="absolute w-full h-full p-[2px]" onClick={handleDiscard}/>
                        </div>
                        <div className="absolute flex justify-center items-center right-8 top-1/2 -translate-y-1/2
                        rounded-full bg-white/20 border border-gray-300/10 w-[80px] h-[80px] hover:bg-green-300/80 hover:border-black/60 hover:scale-[1.2] hover:cursor-pointer transition-all duration-500">
                            <Check color="green" className="absolute w-full h-full p-[2px]" onClick={handleAccept}/>
                        </div>
                    </div>

                </div>

                <div className="w-[30%] h-[90vh] bg-slate-200">
                    {/* Content */}
                    <div className="w-full max-h-[25%] p-[5%] text-black font-outfit ">
                        <h1 className="text-[50px] font-bold">{ home.address }</h1>

                        {/* tags  : Must remember to limit characters and amount */}
                        <div className="h-[30%]">
                            <div className="flex flex-wrap gap-2 mt-[30px]">
                            {home.specialities.map(
                                (tag, index) => (
                                    <div key={index} className="px-3 py-1 w-auto text-[18px] text-black bg-gray-300 text-nowrap font-outfit rounded-sm">
                                        {tag}
                                    </div>    
                                )
                            )}
                        </div>
                        <div className="justify-center w-full my-[30px]"></div>
                        
                        <div className="relative text-black space-y-[10px]">
                            <h1 className="text-[32px]">
                                {advertisementType()}
                            </h1>
                            <h1 className="text-[18px] font-spaceGrotesk">
                                {home.overviewText}
                            </h1>
                            <div className="mt-6 py-4 rounded-lg font-geist">
                                <h2 className="text-lg font-semibold text-neutral-800 mb-3">Property Details</h2>
                                <div className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm text-gray-600">
                                    <div>
                                    <span className="font-medium text-gray-800">Built:</span> {home.built}
                                    </div>
                                    <div>
                                    <span className="font-medium text-gray-800">Size:</span> {home.size} sqft
                                    </div>
                                    <div>
                                    <span className="font-medium text-gray-800">Views:</span> {home.views}
                                    </div>
                                    <div>
                                    <span className="font-medium text-gray-800">Likes:</span> {home.likes}
                                    </div>
                                    <div>
                                    <span className="font-medium text-gray-800">Lot Size:</span> {home.lotSize} acres
                                    </div>
                                    <div>
                                    <span className="font-medium text-gray-800">Year Renovated:</span> {home.yearRenovated.toLocaleString()}
                                    </div>
                                </div>
                            </div> 
                            <h1 className="text-[15px]">
                                Want to know more before anything? <span className="text-blue-500 hover:underline hover:cursor-pointer">See more details</span> about this property.
                            </h1>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>


        </>
    )
}

export default HomeSwiper;