import MainSlide from "./components/main/MainSlide";
import SecondSlide from "./components/main/SecondSlide";
import BackToTop from "./components/misc/BackToTop";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <MainSlide/>
      </div>

      <SecondSlide/>
      <div className="z-10">
        <BackToTop/>
      </div>

    </>
  );
}

export default Home;