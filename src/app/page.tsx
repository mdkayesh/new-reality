import Game from "@/components/Game";
import Hero from "@/components/Hero";
import MatchGame from "@/components/MatchGame";
import Subscribe from "@/components/Subscribe";
import Tournament from "@/components/Tournament";

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
