import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 my-20 ">
      <Bounce>
        <h1 className="text-2xl font-bold leading-none text-center sm:text-4xl mb-8 ">
          Countries
        </h1>
      </Bounce>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/dKSKpDR/United-State.jpg"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                United State of America
              </span>
              <div className="text-sm">
                The U.S. is a country of 50 states covering a vast swath of
                North America..
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/Vv05RXn/Canada.png"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                Canada
              </span>
              <div className="text-sm">
                Canada is a country in North America. Its ten provinces and
                three territories..
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/zPn8ff5/Brazil.png"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                Brazil
              </span>
              <div className="text-sm">
                Brazil, officially the Federative Republic of Brazil, is the
                largest and easternmost..
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/LQh2vSN/Argentina.webp"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                Argentina
              </span>
              <div className="text-sm">
                Argentina, officially the Argentine Republic, is a country in
                the southern.. 
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/5BhTByS/Mexico.png"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                Mexico
              </span>
              <div className="text-sm">
                Mexico, officially the United Mexican States, is a country in
                the southern..
              </div>
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className="max-w-xs p-4 rounded-md shadow-md border ">
            <img
              src="https://i.ibb.co/Brzp9Dh/Peru.webp"
              alt=""
              className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
                Peru
              </span>
              <div className="text-sm">
                Peru is a country in South America that's home to a section of
                Amazon rainforest..
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Countries;
