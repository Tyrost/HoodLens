'use client';
import { useEffect, useState } from "react";
import { ChevronsUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <AnimatePresence>
      {backToTopButton && (
        <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollUp}
            className="fixed bottom-10 right-10 w-[60px] h-[60px] bg-neutral-800 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition duration-500"
        >
          <ChevronsUp width={40} height={40}/>
        </motion.button>
      )}
    </AnimatePresence>
    </>
  );
};

export default BackToTop;
