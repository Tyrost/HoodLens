import { RecentUpdates } from "@/types/types";
import Image from "next/image";


const RecentUpdatePanels = ({updates} : {updates : RecentUpdates[]}) => {
    return (
        <>
        <div className="flex flex-col justify-center gap-y-5 w-full">
            {updates.map((update, index) => (
            <div key={index} className="flex items-center">
                <div className="w-[80%]">
                    <div className="w-full rounded-lg bg-gradient-to-t from-zinc-900 to-zinc-700 border border-white/20 h-[200px]">
                        <div className="flex flex-col p-5">
                        <h1 className="text-[18px] text-white font-outfit text-base/12 tracking-wider">
                            <span className="font-semibold">{update.title}</span> 
                            <span className="mx-3 text-gray-400">|</span> 
                            {update.author} 
                            <span className="mx-3 text-gray-400">|</span> 
                            {update.date}
                        </h1>
                            <p className="text-white/80 text-[15px] text-base/8 font-outfit line-clamp-3">
                                {update.preview}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[20%] px-[2.5%]">
                    <Image 
                    src={update.authorImgURL}
                    alt={update.title}
                    width={300}
                    height={200}
                    className="w-[200px] h-[200px] object-cover rounded-lg border border-white/50"
                    />
                </div>
            </div>
            ))}

        </div>

        </>
    )
}

export default RecentUpdatePanels;