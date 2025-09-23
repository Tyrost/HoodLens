'use client'
import { useRouter } from "next/navigation";
import { BookHeart, FolderCog, Lightbulb, HousePlug } from "lucide-react";

const QuickActions = () => {

    const router = useRouter()


    // TODO: fill them all out once pages are created.
    const handleLoved = () => {
        
    }

    const handlePreferences = () => {

    }

    const handleDiscovery = () => {

    }

    const handleLearn = () => {

    }

    return (
        <>
        <div className="grid grid-cols-2 px-10 w-full gap-x-[3vw] gap-y-[4vh]">

            <div className="group flex flex-col w-full justify-center items-center rounded-lg border text-white  border-white/20 p-[10%]
            bg-gradient-to-tr from-zinc-900 to-zinc-700 hover:from-green-400 hover:to-white transition ease-in-out duration-800
            text-[18px] hover:text-black/80 hover:scale-[1.05] cursor-pointer">
                <BookHeart width={50} height={50} className="text-white group-hover:text-black/80 transition duration-800"/>
                <p className="pt-[8%] text-outfit text-center">
                    Explore the options that you have loved the most.
                </p>
            </div>

            <div className="group flex flex-col w-full justify-center items-center rounded-lg border text-white  border-white/20 p-[10%]
            bg-gradient-to-tl from-zinc-900 to-zinc-700 hover:from-green-400 hover:to-white transition ease-in-out duration-800
            text-[18px] hover:text-black/80 hover:scale-[1.05] cursor-pointer">
                <FolderCog width={50} height={50} className="text-white group-hover:text-black/80 transition duration-800"/>
                <p className="pt-[8%] text-outfit text-center">
                    Verify your preferences and data.
                </p>
            </div>
            
            <div className="group flex flex-col w-full justify-center items-center rounded-lg border text-white  border-white/20 p-[10%]
            bg-gradient-to-tr from-zinc-900 to-zinc-700 hover:from-green-400 hover:to-white transition ease-in-out duration-800
            text-[18px] hover:text-black/80 from-40% to-100% hover:scale-[1.05] cursor-pointer">
                <HousePlug width={50} height={50} className="text-white group-hover:text-black/80 transition duration-800"/>
                <p className="pt-[8%] text-outfit text-center">
                    Discover new neighborhoods and properties.
                </p>
            </div>

            <div className="group flex flex-col w-full justify-center items-center rounded-lg border text-white  border-white/20 p-[10%]
            bg-gradient-to-tl from-zinc-900 to-zinc-700 hover:from-green-400 hover:to-white transition ease-in-out duration-800
            text-[18px] hover:text-black/80 from-40% to-100% hover:scale-[1.05] cursor-pointer">
                <Lightbulb width={50} height={50} className="text-white group-hover:text-black/80 transition duration-800"/>
                <p className="pt-[8%] text-outfit text-center">
                    Learn how to make the most of HoodLens.
                </p>
            </div>

        </div>
        </>
    );
}

export default QuickActions;