import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  btnClass?: string;
  variant?: "primary" | "secondary";
  tag: "link" | "button" | "a";
}

type linkType = {
  tag: "link";
} & LinkProps;

type anchorType = {
  tag: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type btnType = {
  tag: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = (props: ButtonProps & (linkType | btnType | anchorType)) => {
  const { children, btnClass, tag, variant = "primary", ...rest } = props;
  // const btnRef = useRef<HTMLButtonElement>(null);
  // const btnLinkRef = useRef<HTMLAnchorElement>(null);

  if (tag === "link") {
    return (
      <Link
        className={`btn-basic ${
          variant === "primary" ? "" : "secondary"
        } ${btnClass}`}
        {...(rest as linkType)} // Cast to linkType
      >
        {children}
      </Link>
    );
  } else if (tag === "button") {
    return (
      <button
        className={`btn-basic ${btnClass} ${
          variant === "primary" ? "" : "secondary"
        }`}
        {...(rest as btnType)} // Cast to btnType
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={`btn-basic ${
          variant === "primary" ? "" : "secondary"
        } ${btnClass}`}
        {...(rest as anchorType)} // Cast to linkType
      >
        {children}
      </a>
    );
  }
};

export default Button;
