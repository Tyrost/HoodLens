import { SavedHome } from "@/types/types";
import { Trash2, ExternalLink } from "lucide-react";
import { isoToMonthDayYear } from "@/app/utils/misc";
import { numberToLegible } from "@/app/utils/misc";

const savedHomeHomeRow = ({savedHome} : {savedHome : SavedHome}) => {


    // TODO implement functions
    const handleViewDetails = (homeId: number) => {
        console.log("View details for home:", homeId);
        };
    
    const handleDelete = (homeId: number) => {
        console.log("Delete home:", homeId);
        };

    const isOpenBid = !((savedHome.highestBid === undefined || savedHome.highestBid === null) && (savedHome.userBid === undefined || savedHome.userBid === null))

    return (
        <div className="group relative flex w-full cursor-default" key={savedHome.info.ID}>
        <div className="flex w-full border-b border-white/60 font-inter text-white text-[18px] hover:bg-stone-800 transition-all duration-200">
            <div className="w-[30%] border-x border-white/60 flex items-center p-[3%]">
                {savedHome.info.address}
            </div>
            <div className="w-[10%] border-r border-white/60 flex items-center p-[3%]">
                {savedHome.info.location?.zip}
            </div>
            <div className="w-[20%] border-r border-white/60 flex items-center p-[3%]">
                {savedHome.savedCount} : {numberToLegible(savedHome.info.likes)} : {numberToLegible(savedHome.info.views)}
            </div>
            <div className="w-[10%] border-r border-white/60 flex items-center p-[3%]">
                {savedHome.info.price}
            </div>
            <div className="w-[20%] border-r border-white/60 flex items-center p-[3%]">
                {isoToMonthDayYear(savedHome.dateSaved)}
            </div>
            <div className="w-[10%] border-r border-white/60 flex items-center p-[3%]">
                {isOpenBid ? "Bid" : "Open"}
            </div>
        </div>

        {/* Interaction Choices */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-x-4 group-hover:translate-x-0">
            <div className="flex items-center gap-x-2 bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                {/* Details */}
                <button
                    onClick={() => handleViewDetails(savedHome.info.ID)}
                    className="p-2 rounded-md hover:bg-blue-600 transition-colors duration-200 text-white hover:text-white"
                    title="Open Details">
                    <ExternalLink size={16} />
                </button>

                {/* Delete */}
                <button
                    onClick={() => handleDelete(savedHome.info.ID)}
                    className="p-2 rounded-md hover:bg-red-700 transition-colors duration-200 text-white hover:text-white"
                    title="Remove from savedHome">
                    <Trash2 size={16} />
                </button>
            </div>
        </div>   
    </div>
    )
}

export default savedHomeHomeRow;