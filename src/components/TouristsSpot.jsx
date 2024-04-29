/* eslint-disable react/prop-types */
import { Fade, Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const TouristsSpot = ({ infoData }) => {
  // console.log(infoData)
  const homeData = infoData.slice(0, 6);
  // console.log(homeData);
  return (
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 my-20 ">
      <Bounce >
        <h1 className="text-2xl font-bold leading-none text-center sm:text-4xl mb-8 ">
          Tourists Spots
        </h1>
      </Bounce>
      <div className="flex flex-wrap justify-center gap-6">
        {homeData.map((data) => (
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
              <Fade duration={2000}>
                <span className="block font-medium tracking-widest mb-2 uppercase dark:text-default-600">
                  {data.spotName}
                </span>
              </Fade>
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
              to={`/spotDetails/:${data._id}`}
              className="btn bg-[#00BA9C] text-white text-base"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpot;
