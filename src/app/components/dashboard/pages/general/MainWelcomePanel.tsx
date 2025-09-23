
const MainWelcomePanel = ({userName, version} : {userName : string | null | undefined, version : string}) => {
    return (
        <>
        <div className="text-center flex flex-col justify-center items-center w-[80%] border border-white/20 rounded-lg bg-zinc-800 py-5">
            <h1 className="flex justify-center items-center font-outfit text-[48px] font-semibold text-green-500 py-5">
                HoodLens<span className="mx-5 items-center text-[24px] border border-white p-3 text-white bg-zinc-900 rounded-lg">{version}</span>
            </h1>
            <p className="w-[60%] py-5 text-white font-outfit">
                Welcome to HoodLens, <span className="text-green-400">{userName}</span>, your comprehensive neighborhood insight platform. Stay connected with your community and discover national trends.
            </p>
            {/* Status (Dummy for now) */}
            <div className="my-[20px]"> 
                <span className="status-indicator"></span>
                <span className="status-text">System Operational</span>
            </div>
        </div>
        </>
    )
}

export default MainWelcomePanel;