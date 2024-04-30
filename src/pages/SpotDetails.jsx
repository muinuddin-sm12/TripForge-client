import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrCurrency } from "react-icons/gr";
import { PiCurrencyDollarThin } from "react-icons/pi";
import { AiFillClockCircle } from "react-icons/ai";

const SpotDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const [spot, setSpot] = useState(null);
  useEffect(() => {
    fetch(`https://b9a10-server-side-muinuddin-sm12.vercel.app/spot-info/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpot(data);
      });
  }, [id]);

  if (!spot) {
    return (
      <div className="h-[calc(100vh-441px)] flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-[#03BD5E]"></span>
      </div>
    );
  }
  //   console.log(spot);
  return (
    <section className="dark:bg-gray-200 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={spot.img_url}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <p className="uppercase text-2xl font-medium">{spot.spotName}</p>
          <p className="uppercase font-medium text-zinc-400">
            {spot.countryName}
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="text-zinc-600">
              <FaLocationDot />
            </span>
            <h4 className="text-sm"> {spot.location}</h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">
              <FaPeopleGroup />
            </span>
            <h4 className="text-sm">{spot.totalVisitors} million/year</h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">
              <GrCurrency />
            </span>
            <h4 className="text-sm flex items-center">
              {spot.cost}
              <PiCurrencyDollarThin />
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-zinc-600">
              <AiFillClockCircle />
            </span>
            <h4 className="text-sm">{spot.travelTime} days</h4>
          </div>
          <p className="mt-3 text-justify ">{spot.description}</p>
          <p className="mt-3 text-sm text-zinc-500">
            Best Season to Visit:{" "}
            <span className="text-zinc-400 font-medium">{spot.season}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpotDetails;
