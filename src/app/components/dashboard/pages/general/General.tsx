import { useUser } from "@clerk/nextjs";
import InfoSquares from "./InfoSquares";
import MainWelcomePanel from "./MainWelcomePanel";
import QuickActions from "./QuickActions";
import { RecentUpdates } from "@/types/types";
import RecentUpdatePanels from "./RecentUpdates";

const General = () => {

    const { user } = useUser();

    const userName = user?.firstName
    const version = "BETA v1.2.0"

    const updates: RecentUpdates[] = [
        {
            title: "Enhanced Search Filters",
            preview: "New advanced filtering options for better neighborhood discovery and more precise search results. \
            something something something something something something something something something something something something something something something something something something something something something something something something something something something something something something something something something ",
            author: "Sarah Johnson",
            authorImgURL: "/images/home.jpg",
            date: "2025-09-20",
            content: "We've rolled out enhanced search filters that allow users to discover neighborhoods with unprecedented precision. The new filtering system includes demographic data, amenities, transportation options, and safety metrics."
        },
        {
            title: "Performance Improvements",
            preview: "Faster loading times and improved app responsiveness across all devices.",
            author: "Mike Chen",
            authorImgURL: "/images/home.png",
            date: "2025-09-15",
            content: "Our engineering team has implemented significant performance optimizations resulting in 40% faster page load times and smoother user interactions across the platform."
        },
        {
            title: "Beta Launch",
            preview: "Welcome to HoodLens Beta! We're excited to have you test our new platform.",
            author: "Alex Rivera",
            authorImgURL: "/images/home.png",
            date: "2025-09-10",
            content: "HoodLens Beta is officially live! Join thousands of users exploring neighborhoods, discovering local insights, and connecting with their communities. Your feedback helps us build the future of neighborhood intelligence."
        }
    ];

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
                <RecentUpdatePanels updates={updates}/>
            </div>

        
        </div>
        </>
    )
}

export default General;