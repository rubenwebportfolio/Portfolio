import { languages } from "../components/Languages";
import { Stars } from "../components/Stars";

export function Skills({ language }) {
  return (
    <div>
      <div className="flex justify-center ">
        <div className="font-roboto1 text-black  dark:text-white lg:text-2xl text-lg">
          {languages[language].skills2}
        </div>
      </div>

      <div className="flex flex-col items-center font-roboto2 mt-10 dark:text-gray-300">
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• HTML</div>
          <Stars score={4.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• CSS</div>
          <Stars score={4.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Tailwind (CSS)</div>
          <Stars score={4.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Shopify</div>
          <Stars score={4} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• JavaScript</div>
          <Stars score={3.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Testing Dusk (PHP)</div>
          <Stars score={3.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Bootstrap (CSS)</div>
          <Stars score={3.5} />
        </div>

        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• WordPress + Elementor </div>
          <Stars score={3} />
        </div>

        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• PHP</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Laravel (PHP)</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Java</div>
          <Stars score={3} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• MySQL </div>
          <Stars score={3} />
        </div>

        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• React </div>
          <Stars score={2.5} />
        </div>

        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• SASS (CSS) </div>
          <Stars score={1} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Testing Jest (JavaScript)</div>
          <Stars score={1} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• TypeScript</div>
          <Stars score={1} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• Testing PHPUnit (PHP)</div>
          <Stars score={0.5} />
        </div>
        <div className="flex justify-between lg:w-4/12 w-10/12">
          <div>• JQuery</div>
          <Stars score={0.5} />
        </div>
      </div>
    </div>
  );
}
