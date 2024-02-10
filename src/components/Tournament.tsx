import SectionTitle from "./SectionTitle";
import SliderTournament from "./SliderTournament";

const Tournament = () => {
  return (
    <section className="tournament pb-32 relative overflow-hidden">
      <div className="shine-gradient absolute top-0 left-0 -translate-y-1/5 -translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="shine-gradient absolute top-0 right-0 translate-x-1/2 w-[771px] h-[771px] rounded-full z-[-1]" />
      <div className="container overflow-hidden">
        <div className="flex justify-between items-center flex-wrap gap-6">
          <SectionTitle
            title="Tournament"
            text="Head to head matches where you pick the game, rules and prize."
          />

          {/* button */}

          <div className="button">
            <button
              type="button"
              className="border-b-2 border-accent uppercase text-text-100 text-xl pl-6 pb-1"
            >
              <span>View All</span>
            </button>
          </div>
        </div>
        <SliderTournament />
      </div>
    </section>
  );
};

export default Tournament;
