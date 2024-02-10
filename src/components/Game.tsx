"use client";

import games from "@/data/games.json";
import { useState } from "react";
import { HiPlus } from "react-icons/hi";
import Button from "./Button";
import NewsCard from "./NewsCard";
import SearchBar from "./SearchBar";

const Game = () => {
  const [activeBtn, setActiveBtn] = useState("Latest");

  const headerBtns = [
    {
      title: "Latest",
    },
    {
      title: "Game",
    },
    {
      title: "Xbox",
    },
    {
      title: "Pc",
    },
  ];

  const handleActiveBtn = (name: string) => {
    setActiveBtn(name !== activeBtn ? name : activeBtn);
  };

  return (
    <section className="game-section py-32 relative overflow-hidden">
      <div className="container">
        <div className="game-header flex justify-between items-center gap-4 flex-col min-[991px]:flex-row">
          <div className="flex gap-14 items-center flex-col sm:flex-row">
            <h2 className="text-3xl font-semibold text-text-100">Game</h2>
            <ul className="flex gap-4 sm:gap-8 items-center flex-wrap justify-center sm:justify-start">
              {headerBtns.map((btn, index) => (
                <li key={index} className="relative">
                  <button
                    type="button"
                    className={`${
                      activeBtn === btn.title
                        ? "text-text-100"
                        : "text-text-300"
                    } uppercase text-xl font-semibold px-4 py-2`}
                    onClick={() => handleActiveBtn(btn.title)}
                  >
                    {btn.title}
                  </button>

                  <div
                    className={`${
                      activeBtn === btn.title ? "w-full" : "w-0"
                    } absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300`}
                  />
                </li>
              ))}
            </ul>
          </div>
          <SearchBar />
        </div>
        <div className="tab-pane mt-10">
          <div className="grid gap-x-5 gap-y-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {games.games
              .filter((game) => game.category.includes(activeBtn.toLowerCase()))
              .map((game) => (
                <NewsCard game={game} key={game.id} />
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button
            type="button"
            tag="button"
            btnClass="uppercase flex items-center gap-2"
            variant="primary"
          >
            <span>Load More</span>
            <span>
              <HiPlus />
            </span>
          </Button>
        </div>
      </div>

      {/* <div className="shine-gradient absolute -top-1/2 right-0 translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="shine-gradient absolute -top-1/2 left-0 -translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" /> */}
      <div className="shine-gradient absolute bottom-0 right-0 translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="shine-gradient absolute bottom-0 left-0 -translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
    </section>
  );
};

export default Game;
