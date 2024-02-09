import React from "react";
import Button from "./Button";
import Image from "next/image";
import DateCart from "./DateCard";
import DateCard from "./DateCard";

const Hero = () => {
  return (
    <section className="hero pb-20">
      <div className="bg-[url('../../public/assets/herobg.jpg')] bg-center bg-cover">
        <div className="relative w-full h-full mix-gradient overflow-hidden">
          <div className="shine-gradient absolute -translate-x-1/2 left-0 -bottom-1/2 w-[663px] h-[663px] rounded-full" />
          <div className="shine-gradient absolute translate-x-1/2 right-0 -bottom-1/2 w-[663px] h-[663px] rounded-full" />

          {/* container */}
          <div className="container flex flex-col gap-y-10 lg:flex-row py-[100px] relative z-10">
            <div className="max-w-[538px]">
              <h1 className="text-[40px] font-semibold uppercase">
                wellcome new game <br /> and earn money
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur. Facilisi feugiat erat
                nunc aliquam. Urna duis scelerisque morbi diam et non. Libero
                duis neque bibendum viverra feugiat dolor nibh sollicitudin
                arcu. Eu aliquet mi tempor arcu quis.
              </p>

              <Button tag="button" btnClass="mt-8">
                Join Free
              </Button>
            </div>

            {/* right */}

            <div className="flex justify-center lg:justify-end lg:flex-1 w-full lg:w-auto">
              <div className="relative w-full max-w-2xl">
                <div className="absolute top-1/2 left-0 -translate-y-1/2">
                  <DateCard />
                </div>
                <div className="flex justify-end w-full">
                  <Image
                    src={"/assets/heroPoster.png"}
                    width={300}
                    height={400}
                    alt="new game poster"
                    className="h-full aspect-[4/3] w-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
