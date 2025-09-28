
import React from "react";
import { RecommendedCity } from "@/types/types";

const RecommendArea = ({city} : {city : RecommendedCity}) => {
    
    const mapFrameURL = `https://www.google.com/maps/embed/v1/place
    ?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}
    &q=${city.name}+${city.state}
    &zoom=16
    &maptype=satellite
    &region=US`.replace(/\s+/g, "");

    return (
        <>
            <div className="py-[10vh]">
                <div className="text-center">
                    <h1 className="text-[1.2vw] text-black text-bold font-outfit">
                        Based on your current preferences we recommend exploring:
                    </h1>
                    <h1 className="text-[5vw] text-white text-nowrap py-[0.5vw] font-bold drop-shadow-[0_0.8px_1.1px_rgba(0,0,0,0.5)]">
                        {city.name}, {city.state}
                    </h1>
                    <p className="text-[0.9vw] text-black font-outfit text-base/9 mx-auto max-w-[70vw]">
                        {city.description}
                    </p>
                </div>
                <div className="flex justify-center pt-[5vh]">
                    <iframe
                        src={mapFrameURL}
                        width="95%"
                        height="700px"
                        allowFullScreen
                        loading="lazy"
                        className="border border-black "
                    />
                </div>


            </div>
        </>
    )
}

export default RecommendArea;