"use client";
import NavigationBar from "../nav/NavigationBar";
import Collage from "../misc/Collage";
import Slideshow from "../misc/Slideshow";

const MainSlide = () => {

  const slides = [
    { url: "/images/city.jpg", title: "Child" },
    { url: "/images/home.png", title: "Child" },
    { url: "/images/road.png", title: "Child" },
    { url: "/images/street.jpg", title: "Child" },
    { url: "/images/sunset.jpg", title: "Child" }
  ]
 
  return (
    <>
    <div className="fixed z-2 w-full">
      <NavigationBar/>
    </div>  
    <div className="absolute top-[calc(50vh+(70px*1/2))] right-0 transform -translate-y-1/2 h-[80%] w-[25%] pr-[1%] z-1">
        <Slideshow slides={slides}/>
    </div>

    
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <Collage/>
    
      <div className="relative text-center px-6 max-w-3xl text-[clamp(0.9rem,1.2vw,1.25rem)] leading-relaxed">
        <h1 className="font-bold tracking-tight text-gray-900 text-[clamp(2rem,4vw,3.5rem)]">
          Find the Best Home for <span className="text-green-400">You</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-black">
          More than a home, it’s about the life around it. 
          From safety and comfort to transportation and rent trends.
        </p>
      </div>

    </section>
    </>
  );
}

export default MainSlide;