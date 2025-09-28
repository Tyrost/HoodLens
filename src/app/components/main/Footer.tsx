"use client";

import { useRouter } from "next/navigation";
import Logo from "../misc/Logo";
import React from "react";

// Kebab-case helper for turning labels like "How to Apply" into "/how-to-apply"
const toPath = (value: string) => {
  const trimmed = value.trim();
  if (trimmed.startsWith("/")) return trimmed; // already a path
  return "/" + trimmed.toLowerCase().replace(/\s+/g, "-");
};

type Theme = "dark" | "light";

export default function Footer({ theme = "dark" }: { theme?: Theme }) {
  const router = useRouter();
  const isLight = theme === "light";

  const handleRoute = (value: string) => {
    router.push(toPath(value));
  };

  const outerBase =
    "relative w-full h-fit py-[50px] overflow-hidden";
  const outerClasses = isLight
    ? `${outerBase} border-black/20 text-slate-900`
    : `${outerBase} bg-stone-900 border-white/30 text-white border-t-[2px] border-dotted`;

  // Frosted panel inspired by RadialBar: backdrop blur + translucent white layer
  const frostedPanel =
    "mx-4 md:mx-8";

  const headerClass = isLight
    ? "font-bold mb-4 text-center text-[22px] text-green-300 drop-shadow-[0_3.5px_2.4px_rgba(0,0,0,1)]"
    : "font-bold mb-4 text-center text-[22px] text-green-400";

  const linkClass = isLight
    ? "rounded-sm text-black decoration-dotted cursor-pointer hover:bg-black/5 duration-300 underline-offset-[5px] hover:underline"
    : "rounded-sm decoration-dotted cursor-pointer hover:bg-blue-200/30 duration-300 underline-offset-[5px] hover:underline";

  return (
    <div className={outerClasses}>
      {/* Light theme background image behind frosted content */}
      {isLight && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-cover bg-center "
          style={{ backgroundImage: "url('/images/family.jpg')" }}
        />
      )}

    {isLight && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 backdrop-blur-lg bg-white/20"
        />
      )}

      {/* Frosted content wrapper (mimics RadialBar's backdrop style) */}
      <div className={`${isLight ? frostedPanel : ""} px-5 pt-5 pb-8`}>
        <div className="flex justify-center">
          <Logo path={isLight ? "/logo/BoxesBlack.png" : "/logo/FullWhite.png"} cursor={false} size={250} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 p-8">
          <div className="flex flex-col items-center">
            <h1 className={headerClass}>What&apos;s New</h1>
            <div className="flex flex-col text-center space-y-2">
              <button value="How to Apply" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                How to Apply
              </button>
              <button value="About Us" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                About Us
              </button>
              <button value="News" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                News
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={headerClass}>Home Store</h1>
            <div className="flex flex-col text-center space-y-2">
              <button value="Contact" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Contact
              </button>
              <button value="Careers" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Careers
              </button>
              <button value="Pricing" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Pricing
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={headerClass}>Explore</h1>
            <div className="flex flex-col text-center space-y-2">
              <button value="Privacy" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Privacy
              </button>
              <button value="Terms" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Terms
              </button>
              <button value="FAQ" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                FAQ
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={headerClass}>Data</h1>
            <div className="flex flex-col text-center space-y-2">
              <button value="Reports" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Reports
              </button>
              <button value="Analytics" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Analytics
              </button>
              <button value="API Access" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                API Access
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1 className={headerClass}>Company</h1>
            <div className="flex flex-col text-center space-y-2">
              <button value="Privacy" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Privacy
              </button>
              <button value="Terms" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Terms
              </button>
              <button value="Team" onClick={(e) => handleRoute(e.currentTarget.value)} className={linkClass}>
                Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
