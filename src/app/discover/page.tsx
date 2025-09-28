'use client';
import HomeSearchFilter from "../components/filters/HomeFilter";
import NavigationBar from "../components/nav/NavigationBar";
import Logo from "../components/misc/Logo";
import { motion } from "framer-motion"
import RecommendedPanel from "../components/core/RecommendedPanel";
import HomeSwiper from "../components/core/HomeSwiper";
import homes from "@/data/dummy/homeData";
import Footer from "../components/main/Footer";
import RecommendArea from "../components/core/RecommendArea";
import recommendedCities from "@/data/dummy/recommendedCities";

const Discover = () => {

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
        <div className="bg-green-200 pb-[100px]">
            <div className="flex justify-center">
                <RecommendedPanel homeData={homes}/>
            </div>
           
            <HomeSwiper homeList={homes}/> { /* TODO Change to actual data */}
            <RecommendArea city={recommendedCities[0]}/> { /* TODO Change for actual data. */}
        </div>

        <Footer/>

        </>

    );
}

export default Discover;