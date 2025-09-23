import "./status.css"

const InfoSquares = () => {
    // TODO: Gather actual data by implementing a useSystem and useUserData functions to actual data.
    const activeUsers = "24.7k"
    const neighborhoods = "1,203"
    const uptime = "99.2%"

    return (
        <>
        <div className="flex justify-center w-full gap-x-[3%] cursor-default">
            {/* Users */}
            <div className="flex flex-col p-5 font-outfit text-center border border-white/20 rounded-md bg-zinc-800 w-[30%] text-zinc-400">
                <span className="text-[50px] font-semibold text-green-300">{activeUsers}</span>
                Active Users
            </div>
            {/* Neighborhoods */}
            <div className="flex flex-col p-5 font-outfit text-center border border-white/20 rounded-md bg-zinc-800 w-[30%] text-zinc-400">
                <span className="text-[50px] font-semibold text-green-300">{neighborhoods}</span>
                Neighborhoods
            </div>
            {/* Uptime */}
            <div className="flex flex-col p-5 font-outfit text-center border border-white/20 rounded-md bg-zinc-800 w-[30%] text-zinc-400">
                <span className="text-[50px] font-semibold text-green-300">{uptime}</span>
                Uptime
            </div>
        </div>   
        </>
    )
}

export default InfoSquares; 