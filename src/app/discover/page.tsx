'use client';
import HomeSearchFilter from "../components/filters/HomeFilter";
import NavigationBar from "../components/nav/NavigationBar";
import Logo from "../components/misc/Logo";
import { motion } from "framer-motion"
import RecommendedPanel from "../components/core/RecommendedPanel";

const Discover = () => {

    return (
        <>
        <NavigationBar/>
        <div style={{backgroundColor: "#0a0a0a"}}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center -m-[50px]"
                > 
                <Logo path="/logo/FullWhite.png" size={300} cursor={false}/>
            </motion.div>
            <div className="relative flex justify-center">
                <HomeSearchFilter/>
            </div>
        </div>
        <div className="flex justify-center">
            <RecommendedPanel/>
        </div>
        </>

    );
}

export default Discover;