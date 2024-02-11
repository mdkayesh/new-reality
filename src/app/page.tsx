import Game from "@/components/pages/landingPage/Game";
import Hero from "@/components/pages/landingPage/Hero";
import MatchGame from "@/components/pages/landingPage/MatchGame";
import Subscribe from "@/components/pages/landingPage/Subscribe";
import Tournament from "@/components/pages/landingPage/Tournament";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Game />
      <MatchGame />
      <Tournament />
      <Subscribe />
    </main>
  );
}
