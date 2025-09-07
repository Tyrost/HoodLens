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

  const containerStyle = {
    width: "450px",
    height: "700px",
    margin: "0 auto"
  }

  return (
    <>
    <div className="fixed z-2 w-full">
    <NavigationBar/>
    </div>  
    <div className="absolute flex justify-center items-center h-[100%] w-[30%] z-1 right-0">
      <div style={containerStyle}>
        <Slideshow slides={slides}/>
      </div>
    </div>

    
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <Collage/>
    
      <div className="relative text-center px-6 max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900">
          Find the Best Home for <span className="text-green-400">You</span>
        </h1>
        <p className="absolute text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto mt-6">
            More than a home, it’s about the life around it. 
            From safety and comfort to transportation and rent trends.
        </p>
      </div>
    </section>
    </>
  );
}

export default MainSlide;