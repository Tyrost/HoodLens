"use client";

const Collage = () => {
  return (
    <div className="absolute w-full h-[90%] flex items-center overflow-hidden opacity-[70%] ml-[-100px]">
        <div className="relative w-full h-[75%] flex items-center justify-center">
          <div className="absolute top-10 left-[10%] w-[clamp(8rem,14vw,14rem)] h-[clamp(6rem,10vw,10rem)] bg-[url('/images/family.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[-5deg]"></div>
          <div className="absolute top-28 left-[20%] w-[clamp(7rem,12vw,12rem)] h-[clamp(5rem,8vw,8rem)] bg-[url('/images/child.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[8deg]"></div>
          <div className="absolute top-56 left-[5%] w-[clamp(9rem,16vw,16rem)] h-[clamp(6.5rem,11vw,11rem)] bg-[url('/images/home.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[2deg]"></div>
          <div className="absolute top-60 left-[30%] w-[clamp(8rem,14vw,13rem)] h-[clamp(5.5rem,9vw,9rem)] bg-[url('/images/life.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[-7deg]"></div>
          <div className="absolute top-20 left-[35%] w-[clamp(6rem,11vw,11rem)] h-[clamp(4rem,7vw,7rem)] bg-[url('/images/street.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[5deg]"></div>
          <div className="absolute top-80 left-[20%] w-[clamp(8rem,15vw,15rem)] h-[clamp(6rem,10vw,10rem)] bg-[url('/images/walk.jpg')] bg-cover bg-center rounded-lg shadow-lg rotate-[10deg]"></div>
          <div className="absolute top-36 left-[40%] w-[clamp(7rem,12vw,12rem)] h-[clamp(5rem,8vw,8rem)] bg-[url('/images/neighborhood.jpg')] bg-cover bg-center rounded-lg shadow-md rotate-[-4deg]"></div>
        </div>
    </div>
  );
}

export default Collage;