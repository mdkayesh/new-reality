import Link from "next/link";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import footerLinks from "../data/footer.json";
import Logo from "./Logo";

const Footer = () => {
  const socialLinks = [
    {
      title: "Twitch",
      url: "/",
      icon: <FaTwitch />,
    },
    {
      title: "Instagram",
      url: "/",
      icon: <FaInstagram />,
    },
    {
      title: "Twitter",
      url: "/",
      icon: <FaTwitter />,
    },
    {
      title: "Youtube",
      url: "/",
      icon: <FaYoutube />,
    },
  ];

  return (
    <footer className="footer py-28">
      <div className="overflow-hidden">
        <div className="container">
          <div className="flex gap-10 flex-col min-[900px]:flex-row">
            <div className="flex-1 text-text-300">
              <Logo />

              <p className="mt-8 max-w-3xl">
                Quisque vitae ultricies quam, at faucibus elit. Nulla ac
                ultricies risus, id accumsan arcu. Donec facilisis volutpat
                finibus.
              </p>
              <p className="mt-4 max-w-3xl">
                Quisque vitae ultricies quam, at faucibus elit. Nulla ac
                ultricies risus, id accumsan arcu. Donec facilisis volutpat
                finibus.
              </p>
              <p className="mt-4 max-w-3xl">
                Quisque vitae ultricies quam, at faucibus elit. Nulla ac
                ultricies risus, id accumsan arcu. Donec facilisis volutpat
                finibus.
              </p>
            </div>

            <div className="flex-1 relative">
              <div className="absolute bottom-0 right-0 w-[160px] h-[160px] bg-primary rounded-sm rotate-[40deg] translate-x-[48%] translate-y-1/2 shadow-2xl shadow-primary" />

              <div className="flex flex-col min-[360px]:flex-row gap-y-10 justify-between py-12 backdrop-blur-md bg-[#484d4323] rounded-md relative z-20">
                <ul className="flex-1 pl-6 min-[500px]:pl-10 md:pl-12 pr-4">
                  {footerLinks.leftLinks.map((link) => (
                    <li key={link.url} className="mt-8 first:mt-0">
                      <Link href={link.url} className="hover:text-primary">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="h-0.5 w-4/5 mx-auto bg-text-500 min-[360px]:hidden" />
                <div className="min-h-full w-0.5 bg-text-500 hidden min-[360px]:block" />
                <div className="flex-1 pl-6 min-[500px]:pl-10 md:pl-12 pr-4">
                  <ul>
                    {socialLinks.map((link) => (
                      <li key={link.title} className="mt-8 first:mt-0">
                        <Link
                          href={link.url}
                          className="flex gap-4 items-center hover:text-primary"
                        >
                          <span className="text-2xl">{link.icon}</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-12">
                    <li>
                      <Link className="hover:text-primary" href={"/"}>
                        Contact Us
                      </Link>
                    </li>
                    <li className="mt-8">
                      <Link className="hover:text-primary" href={"/"}>
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mt-8">
                      <Link className="hover:text-primary" href={"/"}>
                        Terms & Condition
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
