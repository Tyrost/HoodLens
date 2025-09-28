import { useUser } from "@clerk/nextjs";
import InfoSquares from "./InfoSquares";
import MainWelcomePanel from "./MainWelcomePanel";
import QuickActions from "./QuickActions";
import recentUpdates from "@/data/dummy/recentUpdates";
import RecentUpdatePanels from "./RecentUpdates";

const General = () => {

    const { user } = useUser();

    const userName = user?.firstName
    const version = "BETA v1.2.0"

    return (
        <>
        <div className="flex flex-col w-full gap-y-[25px]">

            <h1 className="text-[35px] text-white font-outfit tracking-wide font-semibold">
                General
            </h1>
            {/* Main Welcome Panel */}
            <div className="flex w-full justify-center py-[50px]">
                <MainWelcomePanel userName={userName} version={version}/>
            </div>
            <div className="my-[25px]">
                <InfoSquares/>
            </div>
            <h1 className="text-white text-[28px] font-outfit">Quick Actions</h1>
            <div className="flex justify-center w-[80%] border border-white/40"></div>    
            <div className="my-[50px]">
                <QuickActions/>
            </div>
            <h1 className="text-white text-[28px] font-outfit">Recent Updates</h1>
            <div className="flex justify-center w-[80%] border border-white/40"></div> 
            <div className="my-[20px]">
                <RecentUpdatePanels updates={recentUpdates}/>
            </div>

        
        </div>
        </>
    )
}

export default General;