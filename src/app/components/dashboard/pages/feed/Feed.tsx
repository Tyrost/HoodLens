import SummaryPanel from "./SummaryPanel";
import DeadlinesPanel from "./DeadlinesPanel";
import savedHomes from "@/data/dummy/savedHomes";
import homes from "@/data/dummy/homeData";
import RecentlyAdded from "./RecentlyAdded";

const ActivityFeed = () => {

    return (
        <>
        <div className="flex flex-col w-full gap-y-[50px]">
            <h1 className="text-[35px] text-white font-outfit tracking-wide font-semibold">
                Activity Feed
            </h1>
            <div className="flex w-full justify-center">
                <SummaryPanel/>
            </div>
            <h1 className="text-white text-[28px] font-outfit">Saved & Bids</h1>
            <div className="flex justify-center w-[80%] border border-white/40"></div> 
            
            <DeadlinesPanel savedHomes={savedHomes} />
             
            <h1 className="text-white text-[28px] font-outfit">Recently Added</h1>
            <div className="flex justify-center w-[80%] border border-white/40"></div> 
            <div className="pb-[10vh]">
                <RecentlyAdded newHomes={homes}/>
            </div> 
        </div>
        </>
    )
}

export default ActivityFeed;