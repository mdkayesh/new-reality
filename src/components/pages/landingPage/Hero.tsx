import HeroSlider from "../../HeroSlider";

const Hero = () => {
  return (
    <section className="hero relative overflow-hidden">
      <div className="shine-gradient absolute -translate-x-1/2 left-0 -bottom-1/2 w-[663px] h-[663px] rounded-full" />
      <div className="shine-gradient absolute translate-x-1/2 right-0 -bottom-1/2 w-[663px] h-[663px] rounded-full" />
      <div className="bg-[url('../../public/assets/herobg.jpg')] bg-center bg-cover">
        <div className="w-full h-full mix-gradient">
          {/* container */}
          <div className="container">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
