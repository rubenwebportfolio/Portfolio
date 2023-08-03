import { Outlet, Link } from "react-router-dom";
import { languages } from "../components/Languages";
import("preline");

export function Dashboard({ language }) {
  return (
    <div className="lg:mt-10">
      <div className="flex justify-center ">
        <div className="flex font-roboto3 font-bold  text-gray-700 dark:text-gray-300 lg:text-2xl text-sm">
          Rubén Pérez Lara | 23 años | Murcia |
          <img
            className="lg:h-8 h-4 ml-1"
            src="/images/spain.png"
            alt="spain"
          ></img>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" font-roboto3 font-bold text-gray-700  dark:text-gray-300 lg:text-2xl text-sm">
          {languages[language].dev1}: 06/2021 IES Miguel Hernández
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" font-roboto3 font-bold text-gray-700  dark:text-gray-300 lg:text-2xl text-sm">
          {languages[language].dev2}: 06/2023 IES Ingeniero de la Cierva
        </div>
      </div>
      <div className="mt-5 lg:mt-14 grid lg:flex grid-cols-2 lg:gap-10 gap-5 lg:justify-center justify-center">
        <div className="shadow-2xl hover:animate-pulse hover:scale-110 duration-200 lg:ml-0 ml-10 lg:mr-0  mt-1 bg-blue-600 rounded-lg dark:bg-gray-900  ">
          <Link to="/aboutme">
            <img
              className="h-28 lg:pb-0 pb-1 w-full"
              src={"/images/aboutMe.webp"}
              alt="negro"
              style={{
                borderTopLeftRadius: "0.4rem",
                borderTopRightRadius: "0.4rem",
              }}
            ></img>
            <div className="flex justify-center">
              <div className=" font-roboto1 lg:text-2xl text-xl  dark:text-slate-300 text-white mt-4">
                {languages[language].aboutme}
              </div>
            </div>
          </Link>
        </div>

        <div className="shadow-2xl hover:animate-pulse hover:scale-110 duration-200 lg:mr-0 mr-10 lg:ml-0 pb-10  mt-1 bg-blue-600 dark:bg-gray-900  rounded-lg ">
          <Link to="/projects">
            <img
              className="h-28 lg:pb-0 pb-1 w-full"
              src={"/images/portfolio.webp"}
              alt="negro"
              style={{
                borderTopLeftRadius: "0.4rem",
                borderTopRightRadius: "0.4rem",
              }}
            ></img>

            <div className="flex justify-center ">
              <div className="font-roboto1 lg:text-2xl text-xl  dark:text-slate-300 text-white mt-4">
                {languages[language].projects}
              </div>
            </div>
          </Link>
        </div>

        <div className="shadow-2xl hover:animate-pulse hover:scale-110 duration-200 lg:mr-0 ml-10 lg:ml-0  pb-10 lg:mt-1 bg-blue-600 rounded-lg dark:bg-gray-900  ">
          <Link to="/skills">
            <img
              className="h-28  w-full"
              src={"/images/skills.webp"}
              alt="negro"
              style={{
                borderTopLeftRadius: "0.4rem",
                borderTopRightRadius: "0.4rem",
              }}
            ></img>

            <div className="flex justify-center">
              <div className="font-roboto1 lg:text-2xl text-xl  dark:text-slate-300 text-white mt-4">
                {languages[language].skills}
              </div>
            </div>
          </Link>
        </div>

        <div className="shadow-2xl lg:mt-1 hover:animate-pulse hover:scale-110 duration-200 lg:ml-0 lg:mr-0 mr-10 bg-blue-600  rounded-lg dark:bg-gray-900  ">
          <Link to="/tools">
            <img
              className="h-28 w-full"
              src={"/images/tools.webp"}
              alt="Dreams PS4"
              style={{
                borderTopLeftRadius: "0.4rem",
                borderTopRightRadius: "0.4rem",
              }}
            ></img>
            <div className="flex justify-center">
              <div className="font-roboto1 lg:text-2xl text-xl dark:text-slate-300 text-white mt-4">
                {languages[language].tools}
              </div>
            </div>
          </Link>
        </div>

        <Outlet />
      </div>
    </div>
  );
}
