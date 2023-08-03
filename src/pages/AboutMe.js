import { languages } from "../components/Languages";

export function AboutMe({ language }) {
  return (
    <div>
      <div className="flex flex-col  items-center bg-black bg-opacity-0">
        <div className=" font-roboto1 text-black dark:text-white lg:text-2xl text-lg mb-5">
          {languages[language].aboutme2}
        </div>
        <div className=" font-roboto3  pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm mb-5">
          {languages[language].conversation1}
        </div>
        <div className=" font-roboto3  pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm mb-5">
          {languages[language].conversation2}
        </div>
        <div className=" font-roboto3 pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm mb-5">
          {languages[language].conversation3}
        </div>
        <div className=" font-roboto3 pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm">
          {languages[language].conversation4}
        </div>
        <a href="mailto:inforubentrabajos@gmail.com">
          <div className="animate-pulse mt-5 cursor-pointer bg-blue-500 dark:bg-blue-700 pr-2 pl-2 rounded-lg text-3xl font-roboto2  text-gray-200 hover:text-yellow-300  dark:text-gray-200 hover:scale-125 duration-300">
            {languages[language].contact}
          </div>
        </a>
      </div>
    </div>
  );
}
