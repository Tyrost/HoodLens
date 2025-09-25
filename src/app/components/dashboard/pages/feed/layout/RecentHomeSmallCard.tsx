import { Home } from "@/types/types";
import Image from "next/image";
import { Heart, MapPinned, Map } from "lucide-react";
import { isoToMonthDayYear } from "@/app/utils/misc";
import { numberToLegible } from "@/app/utils/misc";

const RecentHomeSmallCard = ({recentHome} : {recentHome : Home}) => {
    // TODO
    const handleSeeDetails = () => {

    }

    return (
        <>
        <div className="w-full h-full">
            <div className="flex flex-col h-full overflow-hidden">
                {/* Image Section */}
                <div className="h-[60%] relative">
                    <Image 
                        src={recentHome.images[1].url}
                        alt={recentHome.images[1].title}
                        fill
                        className="object-cover rounded-lg"
                    />

                    {/* See Details Button */}
                    <div className="group cursor-pointer" onClick={() => handleSeeDetails()}>
                        <div className="absolute flex justify-center items-center bottom-2 right-2 rounded-md backdrop-blur-xl px-3 py-1 border border-white/40 text-white group-hover:scale-[1.05] transition-all duration-400">
                            <h1 className="font-semibold font-outfit text-[18px]">See details</h1>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full bg-white border-t border-black rounded-b-lg font-inter">
                    <div className="flex w-full justify-center p-5">
                        <h1 className="flex gap-x-[0.2vw] justify-center items-center text-[0.6vw] text-black">
                            <Map/><span className="font-semibold">{recentHome.address}</span>
                            <span className="mx-3 text-gray-400">|</span> 
                            <MapPinned/> {recentHome.location?.zip} 
                            <span className="mx-3 text-gray-400">|</span> 
                            <Heart/> {numberToLegible(recentHome.likes)}
                        </h1>
                    </div>
                    <div className="flex justify-between w-full px-5 text-[1vw]">
                        <div className="justify-start font-semibold border border-black px-3 bg-green-100 rounded-md">
                            ${numberToLegible(recentHome.price)}
                        </div>
                        <div className="justify-end">
                            {typeof recentHome.datePosted === "string" ? isoToMonthDayYear(recentHome.datePosted) : recentHome.datePosted}
                        </div>
                    </div>


                </div>


            </div>

        </div>
        </>
    )
}

export default RecentHomeSmallCard;