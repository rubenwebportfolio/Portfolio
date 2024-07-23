import { languages } from "../components/Languages";
import React, { useState, useEffect } from "react";

export function Footer({ language }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div>
        <img
          className={`fixed lg:bottom-5 bottom-2 lg:right-7 right-2 lg:h-10 h-8 animate-pulse bg-blue-500 dark:bg-gray-200 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-125 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-100 translate-x-40"
          }`}
          src={"/images/upIcon.png"}
          alt="Up Web"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        ></img>
      </div>
      <div className="flex justify-center">
        <div className=" lg:mt-24 mt-12">
          <iframe
            className=" hover:scale-105 duration-200 lg:w-72 w-60 h-20"
            src="https://open.spotify.com/embed/track/1QFJpg154LuFMYfTryKadD?si=013651491273476e"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify player"
          ></iframe>
        </div>
      </div>
      <div className=" lg:mt-20 mt-14 flex justify-center">
        <a href="mailto:inforubentrabajos@gmail.com">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className=" hover:scale-125 duration-200 lg:h-20 h-9 pb-2 lg:ml-12 ml-8 cursor-pointer"
            src={"/images/gmail.png"}
            alt="gmail"
          ></img>
        </a>
      </div>
      <div className="flex justify-center">
        <div className="dark:text-white font-roboto2 mt-5 mb-10 lg:text-2xl text-xl">
          {languages[language].created}
        </div>
      </div>
    </div>
  );
}
