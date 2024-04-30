import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllTourist = () => {
  const allData = useLoaderData();
  const [sortedData, setSortedData] = useState(allData);


  const handleSorting = (sortBy) => {
    let sorted = [...sortedData];
    if (sortBy === "cost") {
      sorted.sort((a, b) => a.cost - b.cost);
    }
    setSortedData(sorted);
  }
  return (
    <div className="relative max-w-[1536px] mx-auto px-4 md:px-10 mt-40 my-20 flex flex-wrap justify-center gap-6">
      <details className="dropdown absolute  -top-32 right-[220px]">
          <summary className="m-1 btn bg-[#23BE0A] text-white rounded-md">
            Sort By :
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li
              onClick={() => handleSorting("cost")}
            >
              <a>Average Cost</a>
            </li>
          </ul>
        </details>
      {sortedData.map((data) => (
        <div
          key={data._id}
          className="max-w-xs p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
        >
          <img
            src={data.img_url}
            alt=""
            className="object-cover object-center overflow-hidden w-full rounded-md h-52 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block font-medium tracking-widest mb-2 uppercase dark:text-default-600">
              {data.spotName}
            </span>
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <h2 className=" ">Cost: {data.cost}$</h2>
                <h2 className=" ">Travel Time: {data.travelTime} days</h2>
              </div>
              <div className="text-sm">
                <h2>Total visitors: {data.totalVisitors} million</h2>
                <h2>Season: {data.season}</h2>
              </div>
            </div>
          </div>
          <Link
            to={`/spotDetails/${data._id}`}
            className="btn bg-[#00BA9C] text-white text-base"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllTourist;
