import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.jpg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="logo">
      <Image src={logo} width={117} alt="new reality" />
    </Link>
  );
};

export default Logo;
