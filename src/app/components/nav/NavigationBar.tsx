'use client';
import { useRouter } from "next/navigation";
import Logo from "../misc/Logo";
import AnimatedButton from "../misc/AnimatedButton";
import DropdownButton from "./DropdownButton";
import LanguageButton from "../misc/LanguageButton";

const NavigationBar = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center w-full h-[70px] bg-black relative z-10 border-b border-white/30">
      <div className="absolute left-5">
        <Logo path={"/logo/BetaFullWhite.png"} cursor={true} />
      </div>

      <div className="flex space-x-8">
        <AnimatedButton label="Home" onClick={() => router.push("/")} />
        <AnimatedButton label="Discover" onClick={() => router.push("/discover")} />
        <AnimatedButton label="Maps" onClick={() => router.push("/")} />
        <AnimatedButton label="Sell" onClick={() => router.push("/")} />
        <AnimatedButton label="Help" onClick={() => router.push("/")} />
      </div>
      <div className="absolute flex space-x-5 items-center right-4">
        <LanguageButton/>
        <DropdownButton/>
      </div>
    </div>
  );
};

export default NavigationBar;
