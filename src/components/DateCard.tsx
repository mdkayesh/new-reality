import Image from "next/image";
import React from "react";
import { IoMdPlay } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

const DateCard = () => {
  return (
    <div className="flex flex-col relative">
      <div className="date-card glassEffect flex gap-[26px] items-start border-2 border-text-500 border-b-0">
        <div className="uppercase font-semibold text-center pt-5 pl-5">
          <p className="text-2xl">March</p>
          <p className="text-7xl text-accent">02</p>
          {/* <p className="text-2xl text-text-400">14:32:38</p> */}
        </div>
        <div className="img h-full py-5 pr-5 border-b-2 border-text-500">
          <div className="border border-text-500 relative">
            <div className="play h-8 w-8 flex justify-center items-center text-accent bg-black/80 text-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <IoMdPlay />
            </div>
            <Image
              src={"/assets/VideoImage.png"}
              width={137}
              height={100}
              alt="video image"
              className="w-[137px] h-[84px]"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="glassEffect px-5 pb-5 pt-2 border-b-2 border-r-2 border-l-2 w-fit border-text-500">
          <p className="text-2xl text-text-400 font-semibold">14:32:38</p>
        </div>
        <div className="absolute bottom-0 -right-[108px] lg:-right-[118px] xl:-right-[130px] flex">
          <Button
            tag="link"
            href={"/"}
            variant="secondary"
            btnClass="!py-[15px] flex gap-3 items-center"
          >
            <span>JOIN TOURNAMENT</span>
            <span className="text-2xl">
              <GoArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </div>

    // <div className="flex flex-col relative">
    //   <div className="date-card glassEffect flex gap-4 items-start border p-5">
    //     <div className="uppercase font-semibold text-center">
    //       <p className="text-2xl">March</p>
    //       <p className="text-7xl text-accent">02</p>
    //       <p className="text-2xl text-text-400">14:32:38</p>
    //     </div>
    //     <div className="img h-full">
    //       <div className="border border-text-500 relative">
    //         <div className="play h-8 w-8 flex justify-center items-center text-accent bg-black/80 text-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
    //           <IoMdPlay />
    //         </div>
    //         <Image
    //           src={"/assets/VideoImage.png"}
    //           width={137}
    //           height={100}
    //           alt="video image"
    //           className="w-[137px] h-[84px]"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex bg-black absolute bottom-0 left-[8rem] pt-2 pl-2 border-t-2 border-l-2">
    //     {/* <div className="glassEffect px-5 pb-5 pt-2 border-b-2 border-r-2 border-l-2 w-fit border-text-500">
    //       <p className="text-2xl text-text-400 font-semibold">14:32:38</p>
    //     </div> */}
    //     <div className=" flex">
    //       <Button tag="link" href={"/"} btnClass="!py-[15px]">
    //         JOIN TOURNAMENT
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DateCard;
