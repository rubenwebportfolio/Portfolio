import { languages } from "../components/Languages";

export function Wordpress({ language }) {
  return (
    <div>
      <div className="flex flex-col  items-center bg-black bg-opacity-0">
        <div className=" font-roboto1 text-black dark:text-white lg:text-2xl text-lg mb-5">
          {languages[language].wordpress1}
        </div>
        <div className=" font-roboto3  pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm mb-5">
          {languages[language].wordpress2}
        </div>
        <div className=" font-roboto3  pl-5 pr-5 pt-1 pb-1 rounded-lg  w-11/12  text-black dark:text-gray-200  lg:text-md text-sm mb-5">
          {languages[language].wordpress3}
        </div>

        <div className="flex justify-center items-center space-x-10 mt-8">
          <video width="320" height="240" controls>
            <source src="portfolioWP1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video width="320" height="240" controls>
            <source src="portfolioWP2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
