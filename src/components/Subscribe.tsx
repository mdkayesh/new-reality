import React from "react";
import Button from "./Button";

const Subscribe = () => {
  return (
    <section className="subscribe pb-20 overflow-hidden">
      <div className="relative bg-[url('../../public/assets/BgImage.png')] bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black to-black/0" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-black/0" />
        <div className="absolute top-1/3 -translate-y-1/2 -translate-x-1/4 left-0 shine-gradient w-[700px] h-[700px] rounded-full" />
        <div className="absolute top-1/3 -translate-y-1/2 translate-x-1/4 right-0 shine-gradient w-[700px] h-[700px] rounded-full" />
        <div className="container py-40 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-5xl font-semibold uppercase text-center mx-auto">
            SUBSCRIBE AND RECEIVE OUR NEWSLETTER TO FOLLOW THE NEWS
          </h1>
          <div className="flex justify-center items-center mt-10 flex-wrap gap-y-3">
            <div className="border-b h-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="py-3 pr-4 bg-transparent border-none outline-none text-lg"
              />
            </div>
            <Button tag="button" type="submit" btnClass="uppercase">
              Send
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
