import { SavedHome } from "@/types/types";
import Image from "next/image";
import { Heart, MapPinned, Map } from "lucide-react";
import { isoToMonthDayYear } from "@/app/utils/misc";
import { numberToLegible } from "@/app/utils/misc";

const SavedHomeSmallCard = ({savedHome} : {savedHome : SavedHome}) => {
    // TODO
    const handleSeeDetails = () => {

    }

    const daysLeft = 243

    const isOpenBid = !((savedHome.highestBid === undefined || savedHome.highestBid === null) && (savedHome.userBid === undefined || savedHome.userBid === null))

    return (
        <>
        <div className="w-full h-full">
            <div className="flex flex-col h-full overflow-hidden">
                {/* Image Section */}
                <div className="h-[60%] relative">
                    <Image 
                        src={savedHome.info.images[0].url}
                        alt={savedHome.info.images[0].title}
                        fill
                        className="object-cover rounded-lg"
                    />
                    {isOpenBid && (
                        <div className="absolute flex justify-center items-center bottom-2 left-2 rounded-[20px] bg-gradient-to-r from-red-600 to-orange-400 px-3 py-1 border border-black/60">
                            <h1 className="text-white font-semibold font-outfit">{daysLeft} days left!</h1>
                        </div>
                    )}
                    {/* See Details Button */}
                    <div className="group cursor-pointer" onClick={() => handleSeeDetails()}>
                        <div className="absolute flex justify-center items-center bottom-2 right-2 rounded-md backdrop-blur-xl px-3 py-1 border border-white/40 text-white group-hover:scale-[1.05] transition-all duration-400">
                            <h1 className="font-semibold font-outfit text-[18px]">See details</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full bg-white border-t border-black rounded-b-lg font-inter">
                    <div className="flex w-full p-5">
                        <h1 className="flex gap-x-[0.2vw] w-full justify-center items-center text-[0.6vw] text-black">
                            <Map/><span className="font-semibold">{savedHome.info.address}</span>
                            <span className="mx-3 text-gray-400">|</span> 
                            <MapPinned/> {savedHome.info.location?.zip} 
                            <span className="mx-3 text-gray-400">|</span> 
                            <Heart/> {numberToLegible(savedHome.info.likes)}
                        </h1>
                    </div>
                    <div className="flex justify-between w-full px-5 text-[1vw]">
                        <div className="justify-start font-semibold border border-black px-3 bg-green-100 rounded-md">
                            ${numberToLegible(savedHome.info.price)}
                        </div>
                        <div className="justify-end">
                            {typeof savedHome.dateSaved === "string" ? isoToMonthDayYear(savedHome.dateSaved) : savedHome.dateSaved}
                        </div>
                    </div>


                </div>


            </div>

        </div>
        </>
    )
}

export default SavedHomeSmallCard;