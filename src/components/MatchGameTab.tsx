"use client";

import Image from "next/image";
import React, { useState } from "react";
import games from "../data/matchGame.json";
import { PiCaretDownBold } from "react-icons/pi";

const MatchGameTab = () => {
  const [activeTab, setActiveTab] = useState("all");
  const tabslists = ["all", "bold", "dua", "squard"];

  const handleActiveTab = (name: string) => {
    setActiveTab(name !== activeTab ? name : activeTab);
  };

  return (
    <div className="match-game-tab">
      <div className="tablist mt-12">
        <ul className="flex flex-wrap gap-y-2">
          {tabslists.map((tab) => (
            <li key={tab}>
              <button
                type="button"
                className={`${
                  activeTab === tab
                    ? "border-primary text-primary font-semibold"
                    : ""
                } px-5 md:px-12 py-2 text-2xl capitalize border-b-2`}
                onClick={() => handleActiveTab(tab)}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* table */}

      <div className="overflow-x-auto mt-12 w-full">
        <table className="table-auto w-full border-collapse bg-bg-secondary-200">
          <thead className="uppercase text-text-300 border-b-4 border-bg-primary">
            <tr>
              <th className="px-4 whitespace-nowrap py-6">Game</th>
              <th className="px-4 whitespace-nowrap py-6">Platform</th>
              <th className="px-4 whitespace-nowrap py-6">Entry</th>
              <th className="px-4 whitespace-nowrap py-6">Team Size</th>
              <th className="px-4 whitespace-nowrap py-6">Competition</th>
              <th className="px-4 whitespace-nowrap py-6">Skill Level</th>
              <th className="px-4 whitespace-nowrap py-6">Support</th>
              <th className="px-4 whitespace-nowrap py-6">Starting</th>
              <th className="px-4 whitespace-nowrap py-6">Info</th>
              <th className="px-4 whitespace-nowrap py-6"></th>
            </tr>
          </thead>
          <tbody>
            {games.games.map((game) => (
              <tr
                key={game.id}
                className="text-text-100 text-sm lg:text-base border-b-4 border-bg-primary"
              >
                <td className="px-4">
                  <Image
                    src={game.imgUrl}
                    alt={game.platform}
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                </td>
                <td className="px-4">{game.platform}</td>
                <td className="px-4 text-primary font-semibold text-2xl">
                  {game.entryFee}
                </td>
                <td className="px-4 text-center">{game.teamSize}</td>
                <td className="px-4 min-w-[170px]">{game.competition}</td>
                <td className="px-4">{game.skillLevel}</td>
                <td className="px-4">{game.support}</td>
                <td className="px-4">{game.starting}</td>
                <td className="px-4 text-xl text-primary">{game.info}</td>
                <td className="px-4">
                  <button
                    type="button"
                    className="bg-primary px-4 py-2 text-bg-primary hover:bg-transparent transition-all duration-300 border-2 border-primary hover:text-primary rounded-sm"
                  >
                    Accept
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination flex justify-between items-center bg-bg-secondary-200 py-4 px-4 md:px-10 sticky left-0 top-0 border-b-4 border-bg-primary">
          <p className="text-text-300">7 of 51 Cash Matches</p>

          <div className="flex gap-4">
            <button
              type="button"
              className="disabled:opacity-45 h-10 w-10 text-2xl flex justify-center items-center rounded-full border-2 border-primary text-primary hover:scale-105 transition-all duration-300 disabled:hover:scale-100"
              title="next page"
              disabled={true}
            >
              <PiCaretDownBold className="rotate-180" />
            </button>
            <button
              type="button"
              className="h-10 w-10 text-2xl flex justify-center items-center rounded-full border-2 border-primary text-primary hover:scale-105 transition-all duration-300 disabled:hover:scale-100"
              title="next page"
            >
              <PiCaretDownBold />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchGameTab;
