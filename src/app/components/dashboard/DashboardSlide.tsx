"use client";

import NavigationBar from "../nav/NavigationBar"
import { Pages } from "./pages/export"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserResource } from '@clerk/types';
import BackToTop from "../misc/BackToTop";

const DashboardSlide = ({user} : {user: UserResource | null | undefined}) => {

    const [currentPage, setPage] = useState("general")
    const router = useRouter();

    const handleTabRendering = () => {
        switch (currentPage) {
        case "general":
            return <Pages.General/>
        case "feed":
            return <Pages.ActivityFeed/>
        case "notifications":
            return <Pages.NotificationCenter/>
        case "analytics":
            return <Pages.Analytics/>
        case "search":
            return <Pages.SearchFilter/>
        case "favorites":
            return <Pages.Favorites/>
        case "settings":
            return <Pages.Settings/>
        case "faq":
            return <Pages.FAQ/>
        }
    }

    const handlePageNavigation = (page : string) => {
        setPage(page)
        router.push(`/dashboard?page=${page}`, { scroll: false })
    }

    return (
        <>
        <div className="fixed w-full z-[2] top-0">
            <NavigationBar/>
        </div>

        <div className="flex min-h-screen pt-[70px] bg-neutral-950"> {/* Add top padding to account for fixed navbar */}
            {/* Left Panel */}
            <div className="fixed h-full w-[20%] border-r border-white bg-black top-[70px]">
                {/* Main */}
                <div className="flex flex-col">
                <ul className="flex flex-col w-[100%] text-white/80 font-outfit text-[19px] gap-[1vh] text-nowrap m-[5%]">
    <li
        className="w-[70%] rounded-lg p-[10px] hover:shadow-lg hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("general")}
    >
        General
    </li>
    <li
        className="w-[70%] rounded-lg hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("feed")}
    >
        Activity Feed
    </li>
    <li
        className="w-[70%] rounded-lg  hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("notifications")}
    >
        Notification Center
    </li>
    <li
        className="w-[70%] rounded-lg  hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("analytics")}
    >
        Analytics & Overview
    </li>
    <li
        className="w-[70%] rounded-lg  hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("search")}
    >
        Search & Filter
    </li>
    <li
        className="w-[70%] rounded-lg  hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("favorites")}
    >
        Favorites
    </li>
</ul>

<div className="flex items-center justify-center py-[5%] gap-4">
    <div className="flex-1 bg-neutral-500 h-[1px] max-w-[30%]"></div>
    <h1 className="text-neutral-500 font-outfit whitespace-nowrap">
        Configuration
    </h1>
    <div className="flex-1 bg-neutral-500 h-[1px] max-w-[30%]"></div>
</div>

<ul className="flex flex-col w-[100%] text-white/80 font-outfit text-[19px] gap-[1vh] text-nowrap m-[5%]">
    <li
        className="w-[70%] rounded-lg p-[10px] hover:shadow-lg hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("settings")}
    >
        Settings & Preferences
    </li>
    <li
        className="w-[70%] rounded-lg hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => handlePageNavigation("faq")}
    >
        FAQ
    </li>
    <li
        className="w-[70%] rounded-lg  hover:shadow-lg p-[10px] hover:bg-white/10 transition-all cursor-pointer"
        onClick={() => router.push("/terms-of-service")}
    >
        Privacy & Policy
    </li>
</ul>

                </div>
            </div>
            {/* Content */}
            <div className="flex-1 bg-neutral-950 ml-[20%] text-black p-6 w-full min-h-screen">

                <div className="w-full text-white text-[70px] font-outfit font-bold mb-[10px]">
                    Dashboard
                </div>
                {handleTabRendering()}
            <BackToTop/>
            </div>
        </div>

        </>
    )
}

export default DashboardSlide