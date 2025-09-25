import Image from "next/image";
import { SavedHome } from "@/types/types";
import { FileUser, Bed, Bath, Grid2X2, Bookmark, Eye, Heart } from "lucide-react";
import { isoToMonthDayYear } from "@/app/utils/misc";

const SavedHomeCard = ({savedHome} : {savedHome : SavedHome}) => {

    const isHighestBid = false

    const handleUpdateBid = () => {
        
    }

    const handleSeeDetails = () => {

    }

    const daysLeft = 243

    const isOpenBid = !((savedHome.highestBid === undefined || savedHome.highestBid === null) && (savedHome.userBid === undefined || savedHome.userBid === null))

    return (
        <div className="flex flex-col w-full rounded-lg bg-white border border-neutral-800 overflow-hidden">
            {/* Fixed height image section */}
            <div className="h-[300px] relative">
                <Image
                    src={savedHome.info.images[0].url}
                    alt={savedHome.info.images[0].title}
                    fill
                    className="object-cover"
                />
                {isOpenBid && (
                    <div className="absolute flex justify-center items-center bottom-5 left-5 rounded-[20px] bg-gradient-to-r from-red-600 to-orange-400 px-3 py-1 border border-black/60">
                        <h1 className="text-white font-semibold font-outfit">{daysLeft} days left!</h1>
                    </div>
                )}
                <div className="group cursor-pointer" onClick={() => handleSeeDetails()}>
                    <div className="absolute flex justify-center items-center bottom-5 right-5 rounded-md bg-gradient-to-r from-zinc-900 to-zinc-700 px-3 py-1 border border-white/40 text-white group-hover:text-black group-hover:from-white group-hover:to-white transition-all duration-400">
                        <h1 className="font-semibold font-outfit text-[18px]">See details</h1>
                    </div>
                </div>
            </div>    

            {/* Content section - auto height */}
            <div className="flex-1 bg-white w-full border-t border-black p-[2%] font-inter">
                {/* Main Info Sector */}
                <div className="flex justify-between w-full mb-2">
                    <h1 className="max-w-[50%] text-[14px] font-semibold truncate">{savedHome.info.address}</h1>
                    <h1 className="text-[18px] text-green-500 font-semibold">${savedHome.info.price?.toLocaleString()}</h1>
                </div>
                
                {/* Metadata Sector */}
                <div className="flex flex-col w-full mb-2 text-[10px] text-neutral-500 gap-y-1">
                    <div className="flex items-center gap-x-[5px]">
                        <FileUser size={12} />
                        <span>{savedHome.info.mlsID}</span>
                    </div> 
                    <div className="flex gap-x-[15px]">
                        <div className="flex items-center gap-x-[3px]">
                            <Bed size={12} />
                            <span>{savedHome.info.numberRooms}</span>
                        </div>
                        <div className="flex items-center gap-x-[3px]">
                            <Bath size={12} />
                            <span>{savedHome.info.numberBaths}</span>
                        </div>
                        <div className="flex items-center gap-x-[3px]">
                            <Grid2X2 size={12} />
                            <span>{savedHome.info.size} sq ft</span>
                        </div>
                    </div>       
                </div>    
                
                {/* Bid Sector */}
                {isOpenBid && (
                    <div className="flex flex-col w-full gap-y-1 mb-2 text-[12px]">
                        {isHighestBid ? (
                            <div className="flex justify-between">
                                <span>Your Bid:</span>
                                <span className="text-orange-600 font-semibold">${savedHome.userBid?.toLocaleString()}</span>
                            </div> 
                        ) : (
                            <div className="flex justify-between">
                                <span>Your Bid:</span>
                                <span className="font-semibold">${savedHome.userBid?.toLocaleString()}</span>
                            </div> 
                        )}
                        <div className="flex justify-between">
                            <span>Highest Bid:</span>
                            <span className="text-orange-600 font-semibold">${savedHome.highestBid?.toLocaleString()}</span>
                        </div> 
                        <div className="flex justify-between">
                            <span>Deadline:</span>
                            <span className="font-semibold text-red-600">{typeof savedHome.bidDeadline === "string" ? isoToMonthDayYear(savedHome.bidDeadline) : savedHome.bidDeadline}</span>
                        </div> 
                    </div>
                )}

                {/* Interaction Sector */}
                <div className="w-full border-t border-black/30 pt-2 mb-2">
                    <div className="flex w-full justify-between">
                        <div className="flex justify-start items-center gap-x-[8px]">
                            <div className="flex items-center gap-x-[3px] text-[12px] text-neutral-500">
                                <Bookmark size={12} />
                                <span className="text-black">{savedHome.savedCount}</span>
                            </div>    
                            <div className="flex items-center gap-x-[3px] text-[12px] text-neutral-500">
                                <Heart size={12} />
                                <span className="text-black">{savedHome.info.likes}</span>
                            </div> 
                            <div className="flex items-center gap-x-[3px] text-[12px] text-neutral-500">
                                <Eye size={12} />
                                <span className="text-black">{savedHome.info.views}</span>
                            </div>  
                        </div>
                        <div className="flex justify-end items-center text-neutral-500">
                            <span className="text-[10px]">Saved {typeof savedHome.dateSaved === "string" ? isoToMonthDayYear(savedHome.dateSaved) : savedHome.dateSaved}</span>
                        </div>    
                    </div>    
                </div>
                
                {/* Update Sector */}
                {isOpenBid && (
                    <div className="flex justify-center w-full"> 
                        <div className="flex justify-center w-full border border-black rounded-lg text-black bg-white hover:text-white hover:bg-black transition-all duration-400 cursor-pointer"
                        onClick={() => handleUpdateBid()}>
                            <span className="text-[14px] py-2 px-4 font-semibold">Update Bid</span>
                        </div> 
                    </div> 
                )}   
            </div>    
        </div>
    )
}

export default SavedHomeCard;