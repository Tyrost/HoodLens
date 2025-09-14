'use client';

import { useRouter } from "next/navigation";
import Logo from "../misc/Logo";

const Footer = () => {

    const router = useRouter();

    const handleRoute = (value : string) => {
        router.push(value)
    }

    return (
        <>
        <div className="relative w-full h-fit py-[50px] bg-stone-900 border-t-[2px] border-white/30 border-dotted">
        <div className="flex justify-center">
            <Logo path="/logo/FullWhite.png" size={250}/>
        </div>
        <div className="grid grid-cols-5 gap-auto p-8">
            
            <div className="flex flex-col items-center">
            <h1 className="font-bold mb-4 text-center text-[22px] text-green-400">What&apos;s New</h1>
            <div className="flex flex-col text-center space-y-2">
                <button value="How to Apply" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">How to Apply</button>
                <button value="About Us" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">About Us</button>
                <button value="News" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">News</button>
            </div>
            </div>

            <div className="flex flex-col items-center">
            <h1 className="font-bold mb-4 text-center text-[22px] text-green-400">Home Store</h1>
            <div className="flex flex-col text-center space-y-2">
                <button value="Contact" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Contact</button>
                <button value="Careers" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Careers</button>
                <button value="Pricing" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Pricing</button>
            </div>
            </div>

            <div className="flex flex-col items-center">
            <h1 className="font-bold mb-4 text-center text-[22px] text-green-400">Explore</h1>
            <div className="flex flex-col text-center space-y-2">
                <button value="Privacy" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Privacy</button>
                <button value="Terms" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Terms</button>
                <button value="FAQ" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">FAQ</button>
            </div>
            </div>

            <div className="flex flex-col items-center">
            <h1 className="font-bold mb-4 text-center text-[22px] text-green-400">Data</h1>
            <div className="flex flex-col text-center space-y-2">
                <button value="Reports" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Reports</button>
                <button value="Analytics" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Analytics</button>
                <button value="API Access" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">API Access</button>
            </div>
            </div>

            <div className="flex flex-col items-center">
            <h1 className="font-bold mb-4 text-center text-[22px] text-green-400">Company</h1>
            <div className="flex flex-col text-center space-y-2">
                <button value="Privacy" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Privacy</button>
                <button value="Terms" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Terms</button>
                <button value="Team" onClick={(e) => handleRoute(e.currentTarget.value)} className="rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline">Team</button>
            </div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Footer;