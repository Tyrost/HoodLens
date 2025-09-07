"use client";

const Collage = () => {
  return (
    <div className="absolute w-full h-[90vh] flex items-center overflow-hidden opacity-[70%] ml-[-100px]">
        <div className="relative w-full h-[600px] flex items-center justify-center">
        <div className="absolute top-10 left-[10%] w-56 h-40 bg-[url('/images/family.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[-5deg]"></div>
        <div className="absolute top-28 left-[20%] w-48 h-32 bg-[url('/images/child.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[8deg]"></div>
        <div className="absolute top-56 left-[5%] w-64 h-44 bg-[url('/images/home.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[2deg]"></div>
        <div className="absolute top-60 left-[30%] w-52 h-36 bg-[url('/images/life.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[-7deg]"></div>
        <div className="absolute top-20 left-[35%] w-44 h-28 bg-[url('/images/street.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[5deg]"></div>
        <div className="absolute top-80 left-[20%] w-60 h-40 bg-[url('/images/walk.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[10deg]"></div>
        <div className="absolute top-36 left-[40%] w-48 h-32 bg-[url('/images/neighborhood.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[-4deg]"></div>
        </div>
    </div>
  );
}

export default Collage;