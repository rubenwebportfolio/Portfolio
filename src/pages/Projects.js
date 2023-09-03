import { languages } from "../components/Languages";
import { Link } from "react-router-dom";

export function Projects({ language }) {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-roboto1 text-black  dark:text-white lg:text-2xl text-lg">
          {languages[language].projects2}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center mt-5">
          <div>
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-roboto2 lg:text-lg text-sm dark:text-gray-200">
              {languages[language].project1}

              <a
                className="ml-1 pr-1 pl-1  bg-blue-400 rounded-lg"
                href="https://tailwind.rubenportfolio.com/"
              >
                LINK
              </a>
            </div>
          </div>
          <a className="w-5/12" href="https://tailwind.rubenportfolio.com/">
            <img
              className="cursor-pointer duration-200 hover:animate-pulse lg:h-60 h-36 w-full"
              src="/images/project1Image.png"
              alt="project 1"
            ></img>
          </a>
        </div>

        <div className="flex justify-center mt-5">
          <div>
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-roboto2 lg:text-lg text-sm dark:text-gray-200 ">
              {languages[language].project2}

              <a
                className="ml-1 pr-1 pl-1  bg-blue-400 rounded-lg "
                href="https://rubenportfolio.com/"
              >
                LINK
              </a>
            </div>
          </div>
          <a className="w-5/12" href="https://rubenportfolio.com/">
            <img
              className="cursor-pointer duration-200 hover:animate-pulse lg:h-60 h-36 w-full"
              src="/images/project3Image.png"
              alt="project 2"
            ></img>
          </a>
        </div>

        <div className="flex justify-center mt-5">
          <div>
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-roboto2 lg:text-lg text-sm dark:text-gray-200 ">
              {languages[language].project3}

              <Link to="/projects/wordpress">
                <span
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="ml-1 pr-1 pl-1  bg-blue-400 rounded-lg "
                >
                  LINK
                </span>
              </Link>
            </div>
          </div>
          <span className="w-5/12">
            <Link to="/projects/wordpress">
              <img
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="cursor-pointer duration-200 hover:animate-pulse lg:h-60 h-36 w-full"
                src="/images/wordpressImage.png"
                alt="project 3"
              ></img>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
