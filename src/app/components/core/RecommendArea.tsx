
import React from "react";
import { RecommendedCity } from "@/types/types";
import Image from "next/image";

const RecommendArea = () => {

    const city : RecommendedCity = {
        name: "Flower Mound",
        state: "Texas",
        country: "US",
        description: "Flower Mound, Texas, is a thriving, family-oriented community in the Dallas-Fort Worth metroplex known for its low crime rate, excellent schools, numerous parks, and vibrant recreational amenities, including an extensive network of hike, bike, and equestrian trails. Named for a prominent hill covered in wildflowers, the town offers residents a high quality of life with beautiful open spaces, first-class shopping and dining, and convenient access to major airports.\
        Flower Mound is an incorporated town located in Denton and Tarrant counties in the U.S. state of Texas. Located northwest of Dallas and northeast of Fort Worth adjacent to Grapevine Lake, the town derives its name from a prominent 12.5-acre mound located in the center of town",
        images: [
            {"url": "", "title": ""}
        ]
    }
    
    const key = "AIzaSyD6n4FGGgiFrM5GQYl2NhT1wkkn4CWlo1A"
    const mapFrameURL = `https://www.google.com/maps/embed/v1/place
    ?key=${key}
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