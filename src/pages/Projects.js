import { languages } from "../components/Languages";

export function Projects({ language }) {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-bold outlineHeader text-yellow-400  dark:text-blue-500 lg:text-2xl text-xl">
          {languages[language].projects2}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex justify-center mt-5">
          <div className="bg-gradient-to-r from-white via-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-blue-900  ">
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-bold dark:text-gray-200">
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
              className="cursor-pointer duration-200 hover:animate-pulse h-60 w-full"
              src="/images/project1Image.png"
              alt="project 1"
            ></img>
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <div className="bg-gradient-to-r from-white via-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-blue-900  ">
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-bold dark:text-gray-200">
              {languages[language].project2}

              <a
                className="ml-1 pr-1 pl-1  bg-blue-400 rounded-lg"
                href="http://138.68.84.212/"
              >
                LINK
              </a>
            </div>
          </div>
          <a className="w-5/12" href="http://138.68.84.212/">
            <img
              className="cursor-pointer duration-200 hover:animate-pulse h-60 w-full"
              src="/images/project2Image.png"
              alt="project 2"
            ></img>
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <div className="bg-gradient-to-r from-white via-blue-300 to-blue-500 dark:bg-gradient-to-r dark:from-blue-900  ">
            <div className="lg:mr-10 lg:ml-14 ml-2 just w-44 mt-7 font-bold dark:text-gray-200 ">
              {languages[language].project3}

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
              className="cursor-pointer duration-200 hover:animate-pulse h-60 w-full"
              src="/images/project3Image.png"
              alt="project 3"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
