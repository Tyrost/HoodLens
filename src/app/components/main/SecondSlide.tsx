'use client';

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import GridProp from "../misc/GridProp";
import KeyFeaturePanels from "../misc/KeyFeaturePanels";
import Footer from "./Footer";

const SecondSlide = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Element is considered "visible" if it's intersecting OR still below the top
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );
  
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  

  const handleAnytimeEstimate = () => {
    window.open("https://anytimeestimate.com/")
  }

return (
<section ref={ref} className="w-full h-auto" style={{backgroundColor: "#0a0a0a"}}>
  <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={isVisible ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-full h-auto"
  >
    {/* Content */}
    <div className="flex p-[50px] items-center">
        <GridProp image_path={"/misc/man.png"}/>
        
        <div className="relative ml-[50px] font-spaceGrotesk text-[clamp(0.8rem,1.2vw,1.25rem)] leading-relaxed">
            <h1 className="font-semibold text-[3.5em]">
                Here&apos;s how it works:
            </h1>
            <motion.div
                initial={{ y: 150, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : { y: 150, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} 
                className="relative mt-[30px]"
                >
                <div className="space-y-5 text-base/1em text-[1em]">
                  <p className="font-light">
                  <span className="font-bold text-[1.5em]">Search your ideal place to live.</span>
                  <br/>Look for any neighborhood and instantly pull up real-time data and metrics, not just prices.</p>

                  <p className="font-light">
                  <span className="font-bold text-[1.5em]">See key insights.</span>
                  <br/>Safety, walkability, internet speeds, rent trends. Observe side-by-side dashboards for smarter decisions.</p>

                  <p className="font-light">
                  <span className="font-bold text-[1.5em]">Personalized fit.</span>
                  <br/>Our system highlights areas that match your lifestyle.</p>

                  <p className="font-light">
                  <span className="font-bold text-[1.5em]">Stay up-to-date.</span>
                  <br/>Fresh data keeps your choices relevant and accurate.</p>
                </div>
            </motion.div>
        </div>
    </div>
    <div className="flex justify-center pt-[50px]">
      <KeyFeaturePanels/>
    </div>

  {/* Second Grid Section */}
  <div className="flex items-center m-[3%] mt-[200px] text-left font-spaceGrotesk text-[clamp(0.8rem,1.2vw,1.25rem)] leading-relaxed">
    <div className="w-auto">
      <h2 className="text-[2.5em] font-semibold mb-6">
        Your dream neighborhood, simplified.
      </h2>
      <p className="text-[0.9em] text-base/12 font-light">
      Feeling uncertain about your next move? You&apos;re not alone. 
      A recent Home Bay survey revealed a sharp rise in <span className="font-bold">move-in regret, 
      with 86% of Americans regretting their move</span> in 2023. This is a dramatic increase from 75% in 2022, 
      highlighting how economic pressures are making people second-guess their decisions.<br/>
      The anxiety doesn&apos;t stop there. An <span className="underline decoration-dotted decoration-green-300/40 cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px]" onClick={handleAnytimeEstimate}>Anytime Estimate</span> survey from early 2025 
      showed that 33% of <span className="font-bold">people who moved in 2024 considered backing out of their move</span> at least once.
      Our own data confirms this trend, pointing to a common cause: a lack of crucial information. 
      From unexpected costs and hidden repairs to a mismatch in neighborhood lifestyle, 
      these regrets are often a result of poor research.<br/>
      This is why we built a solution. We provide the <span className="font-bold">advanced research and <span className="underline decoration-dotted decoration-green-300/40 cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px]">real-time data</span></span> 
      <span> </span> you need to make confident decisions and avoid these common pitfalls. 
      Stop leaving your move to chance and start making a choice you&apos;ll be happy with for years to come.      
      </p>
    </div>

    <div className="w-1/2 flex justify-end pl-[50px]">
      <GridProp image_path="/misc/home.png" />
    </div>
  </div>
  <Footer/>
  </motion.div>
</section>
  );
};

export default SecondSlide;
