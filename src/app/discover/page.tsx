'use client';
import HomeSearchFilter from "../components/filters/HomeFilter";
import NavigationBar from "../components/nav/NavigationBar";
import Logo from "../components/misc/Logo";
import { motion } from "framer-motion"
import RecommendedPanel from "../components/core/RecommendedPanel";
import HomeSwiper from "../components/core/HomeSwiper";
import { Home } from "../types/types";
import Footer from "../components/main/Footer";
import BackToTop from "../components/misc/BackToTop";

const Discover = () => {

    const homes: Home[] = [ // sample home information
        {
            type: "House",
            price: 430000,
            address: "1701 Best Lane, Eugene, OR 97401",
            numberBaths: 4,
            size: 4000,
            specialities: ["Near schools", "Quiet neighborhood", "Solar panels", "Great Internet Speeds", "Near schools", "Quiet neighborhood", "Solar panels", "Great Internet Speeds", "Near schools", "Quiet neighborhood", "Solar panels"],
            images: [
              { url: "/images/home.png", title: "Front view" },
              { url: "/images/city.jpg", title: "Nearby city" },
              { url: "/images/street.jpg", title: "Street view" }
            ],
            likes: 100,
            views: 2000,
            built: 1928,
            overviewText: "Luxurious and upgraded, this 4-bedroom, 4.5-bath home on a 1.23-acre lot includes a professional-grade kitchen, home theater, and contemporary amenities like solar PV and a Tesla EV charger",
            yearRenovated: 0,
            lotSize: 0.4
          },
          {
            type: "Apartment",
            price: 280000,
            address: "500 Main St, Eugene, OR 97401",
            numberBaths: 2,
            size: 1200,
            specialities: ["Close to shops", "Public transport nearby"],
            images: [
              { url: "/images/road.png", title: "Road view" },
              { url: "/images/sunset.jpg", title: "Sunset view" }
            ],
            likes: 100,
            views: 2000,
            built: 1928,
            overviewText: "Some short overview",
            yearRenovated: 0,
            lotSize: 0.4
          }
    ]

    return (
        <>
        <div className="fixed z-2 w-full">
            <NavigationBar/>
        </div>  
        <div style={{backgroundColor: "#0a0a0a"}}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center"
                > 
                <Logo path="/logo/FullWhite.png" size={300} cursor={false}/>
            </motion.div>
            <div className="relative flex justify-center">
                <HomeSearchFilter/>
            </div>
        </div>
        <div className="bg-green-200 pb-[200px]">
            <div className="flex justify-center">
                <RecommendedPanel/>
            </div>
           
            <HomeSwiper homeList={homes}/>
        </div>
        <Footer/>

        </>

    );
}

export default Discover;