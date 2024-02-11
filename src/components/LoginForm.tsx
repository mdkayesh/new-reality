"use client";

import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

const loginAccounts = [
  {
    imgUrl: "/assets/xbox.png",
  },
  {
    imgUrl: "/assets/playStation.png",
  },
  {
    imgUrl: "/assets/nintendo.png",
  },
  {
    imgUrl: "/assets/steam.png",
  },
  {
    imgUrl: "/assets/facebook.png",
  },
  {
    imgUrl: "/assets/google.png",
  },
  {
    imgUrl: "/assets/apple.png",
  },
  {
    imgUrl: "/assets/lego.png",
  },
];

type FormData = {
  email: string;
};

type LoginFormProps = {
  onSubmit?: (formData: FormData) => void;
};

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState({
    email: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email === "") {
      setError((prev) => {
        return { ...prev, email: "Please enter your email address" };
      });
    } else {
      if (onSubmit) onSubmit(formData);
      setFormData({ email: "" });
      setError({ email: "" });
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form flex flex-col items-center px-6 py-8 md:px-14 md:py-12 max-w-lg"
    >
      <Logo />
      <p className="mt-10 font-semibold text-text-100">Sign In or Sign up</p>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email Address"
        className={`${
          error.email ? "border-red-500" : "border-text-400"
        } border px-5 py-3 rounded-md focus-within:border-primary outline-none bg-transparent w-full mt-5`}
        value={formData.email}
        onChange={onChange}
        // required
      />
      {error.email && (
        <p className="mt-2 text-xs text-red-500 self-start">{error.email}</p>
      )}

      <button
        type="submit"
        className="w-full px-6 py-3 bg-primary text-black font-semibold uppercase border border-primary hover:bg-transparent transition-all duration-300 hover:text-primary rounded-md mt-7"
      >
        CONTINUE
      </button>

      <div className="flex items-center gap-2 my-8 w-full text-text-400">
        <div className="flex-1 h-[1px] bg-text-400"></div>
        <p>or continue with</p>
        <div className="flex-1 h-[1px] bg-text-400"></div>
      </div>

      <ul className="grid grid-cols-4 gap-[10px]">
        {loginAccounts.map((b, i) => (
          <li key={i}>
            <button type="button" title="login">
              <Image src={b.imgUrl} width={80} height={64} alt="login" />
            </button>
          </li>
        ))}
      </ul>

      <p className="text-sm text-center mt-7">
        By signing in or signing up, you agree with our{" "}
        <br className="hidden md:block" />
        <Link href={"/"} className="text-primary hover:underline">
          Privacy Policy
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
