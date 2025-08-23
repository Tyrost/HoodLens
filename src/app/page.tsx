import MainSlide from "./components/home/MainSlide";
import HomeParticles from "./components/misc/Particles";

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 z-11">
          <HomeParticles/>
      </div>
      <div className="fixed w-full">
        <MainSlide/>
      </div>
    </>
  );
}

export default Home;