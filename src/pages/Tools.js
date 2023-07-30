import { languages } from "../components/Languages";
import { Stars } from "../components/Stars";
export function Tools({ language }) {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-bold outlineHeader text-yellow-400  dark:text-blue-500 lg:text-2xl text-lg">
          {languages[language].tools2}
        </div>
      </div>

      <div className="flex flex-col items-center font-bold mt-10 dark:text-gray-300">
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Visual Studio Code</div>
          <Stars score={4} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Git / GitHub</div>
          <Stars score={3.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• PHPStorm</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Linux Terminal</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Netbeans</div>
          <Stars score={2} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Eclipse</div>
          <Stars score={2} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Docker</div>
          <Stars score={2} />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="font-bold outlineHeader text-yellow-400  dark:text-blue-500 lg:text-2xl text-lg">
          {languages[language].tools3}
        </div>
      </div>
      <div className="flex flex-col items-center font-bold mt-10 dark:text-gray-300">
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Power Director</div>
          <Stars score={4.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Filmora 12</div>
          <Stars score={4.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Unreal Engine 5</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Gimp</div>
          <Stars score={2} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Figma</div>
          <Stars score={2} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Adobe Photoshop</div>
          <Stars score={2} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Blender</div>
          <Stars score={1.5} />
        </div>
      </div>
    </div>
  );
}
