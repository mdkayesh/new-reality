import React from "react";

type SectionTitleProps = {
  title: string;
  text: string;
};

const SectionTitle = ({ title, text }: SectionTitleProps) => {
  return (
    <div className="section-title border-l-4 border-primary px-5 py-2">
      <h1 className="text-4xl md:text-5xl text-text-100 uppercase font-semibold">
        {title}
      </h1>
      <p className="mt-3">{text}</p>
    </div>
  );
};

export default SectionTitle;
