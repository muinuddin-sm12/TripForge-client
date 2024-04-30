import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Update = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [data, setData] = useState(null);
    // const [updateData, setUpdateData] = use

  useEffect(() => {
    fetch(`https://b9a10-server-side-muinuddin-sm12.vercel.app/spot-info/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const img_url = form.img_url.value;
    const spotName = form.spotName.value;
    const countryName = form.countryName.value;
    const location = form.location.value;
    const description = form.description.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const travelTime = form.travelTime.value;
    const totalVisitors = form.totalVisitors.value;
    const email = user?.email;
    const userName = user?.displayName;
    const updateData = {
      img_url,
      spotName,
      countryName,
      location,
      description,
      cost,
      season,
      travelTime,
      totalVisitors,
      email,
      userName,
    };
    fetch(`https://b9a10-server-side-muinuddin-sm12.vercel.app/spot-info/${id}`, {
      method: "PUT",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(updateData)
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount> 0){
        alert('Updated Successfully!')
      }
    })
  };
  if (!data) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  console.log(data);

  return (
    <div className="max-w-[1036px] mx-auto px-4 md:px-10 my-20">
      <section className="p-6 my-14 ">
        <form
          onSubmit={handleUpdate}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-md  dark:bg-gray-100">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-semibold text-xl">Spot Details</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Image URL</label>
                <input
                  type="text"
                  name="img_url"
                  defaultValue={data.img_url}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourists spot name</label>
                <input
                  type="text"
                  name="spotName"
                  defaultValue={data.spotName}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Country name</label>
                <input
                  type="text"
                  name="countryName"
                  defaultValue={data.countryName}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Location</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={data.location}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Short description</label>
                <input
                  type="text"
                  name="description"
                  defaultValue={data.description}
                  className="w-full py-4 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Average cost</label>
                <input
                  type="text"
                  name="cost"
                  defaultValue={data.cost}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Seasonality</label>
                <input
                  type="text"
                  name="season"
                  defaultValue={data.season}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Travel time</label>
                <input
                  type="text"
                  name="travelTime"
                  defaultValue={data.travelTime}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2 ">
                <label className="text-sm">Total visitors per year</label>
                <input
                  type="text"
                  defaultValue={data.totalVisitors}
                  name="totalVisitors"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">User Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder={user?.email}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                  readOnly
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">User Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder={user?.displayName}
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                  readOnly
                />
              </div>
              <input
                className="btn col-span-2 lg:col-span-1 bg-[#00BA9C] text-white font-medium"
                type="submit"
                value="Update"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Update;
