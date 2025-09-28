
const SummaryPanel = () => {

    // consider using an interface
    const likedPostsCount = "127";
    const savedPostsCount = "8";
    const AiInteractions = "11"
    const NeighborhoodsExplored = "3"
    const userPlan = "Premium +";


    return (
        <>
        <div className="w-[80%] bg-zinc-800 border border-white/40 rounded-lg p-[2%]">
            <h1 className="font-outfit text-[18px] text-white font-semibold">
                Summary
            </h1>
            <div className="flex flex-col w-full text-[15px] text-white font-outfit py-5 gap-y-5">
                {/* 1 */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="flex justify-start text-green-300">
                        Liked Posts
                    </h1>
                    <h1 className="flex items-center justify-end text-[20px] font-semibold">
                        {likedPostsCount}
                    </h1>
                </div>
                {/* 2 */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="flex items-center justify-start text-green-300">
                        Saved Posts
                    </h1>
                    <h1 className="flex items-center justify-end text-[20px] font-semibold">
                        {savedPostsCount}
                    </h1>
                </div>
                {/* 3 */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="flex items-center justify-start text-green-300">
                        AI Interactions
                    </h1>
                    <h1 className="flex items-center justify-end text-[20px] font-semibold">
                        {AiInteractions}
                    </h1>
                </div>
                {/* 4 */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="flex items-center justify-start text-green-300">
                        Neighborhoods Explored
                    </h1>
                    <h1 className="flex items-center justify-end text-[20px] font-semibold">
                        {NeighborhoodsExplored}
                    </h1>
                </div>
                {/* 5 */}
                <div className="flex w-full items-center justify-between">
                    <h1 className="flex items-center justify-start text-green-300">
                        Current Plan
                    </h1>
                    <h1 className={`flex items-center justify-end text-[20px] font-semibold
                    ${userPlan === "Premium +" ? "bg-gradient-to-r from-yellow-400 via-orange-300 to-red-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gold-gradient"
                    : ""}`}>
                        {userPlan}
                    </h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default SummaryPanel
