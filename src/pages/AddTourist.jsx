import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";

const AddTourist = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.email);
  const [readOnly] = useState(true);
  const successNotify = () => toast.success("Successfully Added!");

  const handleForm = (event) => {
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
    const spotInfo = {
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
    console.log(spotInfo)

    fetch("https://b9a10-server-side-muinuddin-sm12-three.vercel.app/spot-info", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log(data)
        form.reset();
        successNotify();
      });
  };

  return (
    <div className="max-w-[1036px] mx-auto px-4 md:px-10 my-20">
      <section className="p-6 my-14 ">
        <form
          onSubmit={handleForm}
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
                  placeholder="image url"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm">Tourists spot name</label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="tourists spot name"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Country name</label>
                <select
                  name="countryName"
                  className="w-full py-2 pl-2 outline-none border rounded-md"
                  required
                >
                  <option value="">Select a season</option>
                  <option value="United States of America">United States of America</option>
                  <option value="Canada">Canada</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Peru">Peru</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Location</label>
                <input
                  type="text"
                  name="location"
                  placeholder="location"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm">Short description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="add short description"
                  className="w-full py-4 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Average cost</label>
                <input
                  type="text"
                  name="cost"
                  placeholder="00.00"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Seasonality</label>
                <select
                  name="season"
                  className="w-full py-2 pl-2 outline-none border rounded-md"
                  required
                >
                  <option value="">Select a season</option>
                  <option value="Summer">Summer</option>
                  <option value="Winter">Winter</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div className="col-span-full sm:col-span-2">
                <label className="text-sm">Travel time</label>
                <input
                  type="text"
                  name="travelTime"
                  placeholder="0 days"
                  className="w-full py-2 pl-2 outline-none border rounded-md "
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-2 ">
                <label className="text-sm">Total visitors per year</label>
                <input
                  type="text"
                  placeholder="0/million"
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
                  readOnly={user.email && readOnly}
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
                value="Add"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddTourist;
