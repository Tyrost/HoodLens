'use client';
import SavedHomeCards from "./layout/SavedHomeCards";
import { SavedHome } from "@/types/types";
import { Rows3, List, LayoutGrid, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import SavedHomeList from "./layout/SavedHomeList";
import SavedHomeGrid from "./layout/SavedHomeGrid";

const DeadlinesPanel = ({savedHomes} : {savedHomes : SavedHome[]}) => {

    const [layoutName, changeLayout] = useState("grid")
    const [savedHomeDisplay, changeCountDisplay] = useState(3)

    const parseISO = (ISO : string) => {
        return new Date(ISO).getTime()
    }

    const cutTop3 = (a : SavedHome, b : SavedHome) => {
        
        if (a.bidDeadline !== undefined && b.bidDeadline !== undefined) {
            return parseISO(b.bidDeadline) - parseISO(a.bidDeadline)
        } else {
            return parseISO(b.dateSaved) - parseISO(a.dateSaved)
        }
    } 

    const topSaved : SavedHome[] = [...savedHomes].sort((a,b) => cutTop3(a,b)).slice(0,savedHomeDisplay);

    // TODO implement different layouts
    const handleChangeLayout = () => {
        switch (layoutName) {
            case "rows":
            return (
                <SavedHomeCards savedHomes={topSaved}/>
            );
            case "list":
            return (
                <SavedHomeList savedHomes={topSaved}/>
            )
            case "grid":
            return (
                <SavedHomeGrid savedHomes={topSaved}/>
            )
        }
    }

    const handleCountIncrement = () => {
        if (savedHomeDisplay < savedHomes.length && savedHomeDisplay <= 10) {
            changeCountDisplay(savedHomeDisplay + 1)
         }
    }

    const handleCountDecrement = () => {
        if (savedHomeDisplay >= 1) {
            changeCountDisplay(savedHomeDisplay - 1)
        }
    }

    return (
        <>
        <div className="flex w-full justify-between items-center">
            
            {/* User Config Panel */}
            <div className="flex justify-start items-center gap-x-[20px] text-black">
                <h1 className="p-2 bg-white rounded-lg hover:bg-black hover:text-white duration-300 cursor-pointer border border-white">All Saved Homes</h1>
                {/* Post Display Control */}
                <div className="flex h-[50px] w-[100px] bg-white border-2 border-white/50 rounded-sm overflow-hidden">
                    {/* Display area */}
                    <div className="flex w-[70%] justify-center items-center text-black font-inter text-[20px]">
                        {savedHomeDisplay === savedHomes.length ? "All" : savedHomeDisplay}
                    </div>
                    
                    {/* Controls */}
                    <div className="flex flex-col w-[30%] bg-neutral-800">
                        <button 
                            className="flex-1 flex justify-center items-center text-white hover:bg-neutral-600 transition-colors border-b border-white/20"
                            onClick={() => handleCountIncrement()}>
                            <ChevronUp />
                        </button>
                        <button 
                            className="flex-1 flex justify-center items-center text-white hover:bg-neutral-600 transition-colors"
                            onClick={() => handleCountDecrement()}>
                            <ChevronDown />
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-end text-white gap-x-[10px]">
                <div className="hover:scale-[1.1] hover:text-green-200 transition-all duration-800">
                    <LayoutGrid width={36} height={36} 
                    onClick={() => changeLayout("grid")} className={layoutName === "grid" ? "border-b-3 border-green-300" : ""}/>    
                </div>    
                <div className="hover:scale-[1.1] hover:text-green-200 transition-all duration-800">
                    <List width={36} height={36} 
                    onClick={() => changeLayout("list")} className={layoutName === "list" ? "border-b-3 border-green-300" : ""}/>
                </div>
                <div className="hover:scale-[1.1] hover:text-green-200 transition-all duration-800" 
                onClick={() => changeLayout("rows")}>
                    <Rows3 width={36} height={36} className={layoutName === "rows" ? "border-b-3 border-green-300" : ""}/>
                </div>   
            </div>
        </div>

        {/* Use Cards / Listing */}
        
        {savedHomeDisplay === 0 ? (
            <div className="flex w-full justify-center">
                <h1 className="text-white text-[24px] font-outfit font-semibold">
                    No Saved Post Selected
                </h1>
            </div>
        ) : (
            <div className="flex justify-center w-full">
                {handleChangeLayout()}
            </div>
        )}
        </>
    );
}

export default DeadlinesPanel;