"use client";
import { SavedHome } from "@/types/types";
import SavedHomeSmallCard from "./SavedHomeSmallCard";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";

const spring = { type: "spring", stiffness: 380, damping: 32, mass: 0.9 } as const;

const SavedHomeGrid = ({ savedHomes }: { savedHomes: SavedHome[] }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex w-full justify-center">
        <motion.div
          layout
          className="
            grid 
            justify-center            /* center the whole grid horizontally */
            justify-items-center      /* center items in their tracks */
            gap-[3vw]
            w-full
          "
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(23vw, 23vw))" }}
          transition={spring}
        >
          <AnimatePresence mode="popLayout">
            {savedHomes.map((saved, idx) => (
              <motion.div
                key={saved.info.ID}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: prefersReducedMotion ? 0 : 12, scale: 0.98 }}
                transition={{
                  ...spring,
                  opacity: { duration: 0.18 },
                  delay: prefersReducedMotion ? 0 : idx * 0.03,
                }}
                className="
                  transform-gpu will-change-transform
                  transition-[box-shadow,background-color] duration-300
                  hover:shadow-[0_0_0_2px_rgba(255,255,255,0.2)]
                "
                style={{ width: "23vw", height: "30vh" }}  // exact size
              >
                <SavedHomeSmallCard savedHome={saved} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default SavedHomeGrid;
