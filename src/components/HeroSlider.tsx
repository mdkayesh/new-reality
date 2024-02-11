"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import { Pagination } from "swiper/modules";
import Button from "./Button";
import DateCard from "./DateCard";
import LoginForm from "./LoginForm";
import { Modal } from "./Modal";
import { useState } from "react";

const HeroSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="slider-tournament">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-y-10 lg:flex-row py-[100px] relative z-10 overflow-hidden">
            <div className="max-w-[538px]">
              <h1 className="text-[40px] font-semibold uppercase text-text-100">
                wellcome new game <br /> and earn money
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur. Facilisi feugiat erat
                nunc aliquam. Urna duis scelerisque morbi diam et non. Libero
                duis neque bibendum viverra feugiat dolor nibh sollicitudin
                arcu. Eu aliquet mi tempor arcu quis.
              </p>
              <Button
                tag="button"
                btnClass="mt-8 flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>Join Free</span>
                <span>
                  <HiPlus />
                </span>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-y-10 lg:flex-row py-[100px] relative z-10 overflow-hidden">
            <div className="max-w-[538px]">
              <h1 className="text-[40px] font-semibold uppercase text-text-100">
                wellcome new game <br /> and earn money
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur. Facilisi feugiat erat
                nunc aliquam. Urna duis scelerisque morbi diam et non. Libero
                duis neque bibendum viverra feugiat dolor nibh sollicitudin
                arcu. Eu aliquet mi tempor arcu quis.
              </p>

              <Button tag="button" btnClass="mt-8 flex items-center gap-2">
                <span>Join Free</span>
                <span>
                  <HiPlus />
                </span>
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-y-10 lg:flex-row py-[100px] relative z-10 overflow-hidden">
            <div className="max-w-[538px]">
              <h1 className="text-[40px] font-semibold uppercase text-text-100">
                wellcome new game <br /> and earn money
              </h1>
              <p className="mt-10">
                Lorem ipsum dolor sit amet consectetur. Facilisi feugiat erat
                nunc aliquam. Urna duis scelerisque morbi diam et non. Libero
                duis neque bibendum viverra feugiat dolor nibh sollicitudin
                arcu. Eu aliquet mi tempor arcu quis.
              </p>

              <Button tag="button" btnClass="mt-8 flex items-center gap-2">
                <span>Join Free</span>
                <span>
                  <HiPlus />
                </span>
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
        </SwiperSlide>
      </Swiper>

      <Modal
        onClose={() => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        <LoginForm />
      </Modal>
    </div>
  );
};

export default HeroSlider;
