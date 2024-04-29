import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 my-20 ">
      <h1 className="text-2xl font-bold leading-none text-center sm:text-4xl mb-8 ">
        Countries
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        <Link to='/'>
        <div className="max-w-xs p-4 rounded-md shadow-md border ">
          <img
            src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
            alt=""
            className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block font-semibold  mb-2 uppercase dark:text-default-600">
              Country name
            </span>
            <div>
              Short description: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi, iusto.
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Countries;
