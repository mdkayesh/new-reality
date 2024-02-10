import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsCardProps = {
  game: NewsCard;
};

const NewsCard = ({ game }: NewsCardProps) => {
  return (
    <Link
      href={"/"}
      key={game.id}
      className="bg-bg-secondary-100 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="img">
        <Image
          src={game.imgUrl}
          width={600}
          height={200}
          className="aspect-[3/2]"
          alt={game.title}
        />
      </div>

      <div className="content px-5 pt-5 pb-7 border-b-4 border-primary">
        <h2 className="text-xl font-semibold">{game.title}</h2>
        <p className="mt-3 text-text-400">{game.desc}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
