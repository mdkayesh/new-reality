import MatchGameTab from "./MatchGameTab";
import SectionTitle from "./SectionTitle";
import SelectDropdown from "./SelectDropdown";

const MatchGame = () => {
  return (
    <section className="match-game pb-32 relative overflow-hidden">
      <div className="shine-gradient absolute top-0 left-0 -translate-y-1/5 -translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="shine-gradient absolute top-0 right-0 translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="container">
        <div className="flex justify-between gap-7 min-[991px]:items-center flex-col min-[991px]:flex-row">
          <SectionTitle
            title="match game"
            text="Head to head matches where you pick the game, rules and prize."
          />

          <div className="flex gap-3 sm:gap-6 flex-1 min-[991px]:justify-end">
            <SelectDropdown
              btnName="Games"
              options={["option 1", "option 2", "option 3"]}
              // onSelect={(value) => console.log(value)}
            />
            <SelectDropdown
              btnName="Platforms"
              options={["option 1", "option 2", "option 3"]}
              // onSelect={(value) => console.log(value)}
            />
          </div>
        </div>

        {/* tablist */}

        <MatchGameTab />
      </div>
    </section>
  );
};

export default MatchGame;
