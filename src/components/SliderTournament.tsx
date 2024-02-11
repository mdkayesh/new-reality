"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import tournamentData from "@/data/tournaments.json";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FreeMode } from "swiper/modules";
import Button from "./Button";

const SliderTournament = () => {
  return (
    <div className="slider-tournament mt-16 pb-20">
      <Swiper
        slidesPerView={1.1}
        spaceBetween={0}
        freeMode={true}
        breakpoints={{
          600: {
            slidesPerView: 1.9,
          },
          768: {
            slidesPerView: 2.2,
          },
          800: {
            slidesPerView: 2.5,
          },
          991: {
            slidesPerView: 2.9,
          },
          1070: {
            slidesPerView: 3.2,
          },
          1200: {
            slidesPerView: 3.6,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {tournamentData.tournaments.map((tournament) => (
          <SwiperSlide key={tournament.id}>
            <div className="relative">
              <Image
                src={tournament.imgUrl}
                width={400}
                height={600}
                alt={tournament.title}
              />

              <div className="absolute inset-0 w-full h-full flex flex-col justify-between">
                <div className="header py-6 pl-6 pr-9">
                  <h2
                    className={`${
                      tournament.contrast === "light" ? "text-bg-primary" : ""
                    } text-4xl min-[1100px]:text-4xl uppercase font-semibold`}
                  >
                    {tournament.title}
                  </h2>
                  <p
                    className={`${
                      tournament.contrast === "light" ? "text-bg-primary" : ""
                    } mt-2 min-[1100px]:text-xl`}
                  >
                    {tournament.slogan}
                  </p>
                </div>

                <div className="footer backdrop-blur-sm px-4 py-7 bg-black/55 flex justify-between items-center gap-2">
                  <div className="flex gap-2 md:gap-4 items-center">
                    <div>
                      <p className="text-base md:text-lg text-text-300">
                        Entry
                      </p>
                      <p className="text-text-100">{tournament.entry}</p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-text-300">Mode</p>
                      <p className="text-text-100">{tournament.mode}</p>
                    </div>
                    <div>
                      <p className="text-base md:text-lg text-text-300">
                        Prize
                      </p>
                      <p className="text-text-100">{tournament.prize}</p>
                    </div>
                  </div>

                  <Button
                    tag="link"
                    href={"/"}
                    btnClass="!py-2 !pl-4 !pr-8 !bg-white uppercase flex gap-1 items-center"
                  >
                    <span>Join</span>
                    <span className="text-2xl">
                      <IoIosArrowRoundForward />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTournament;
