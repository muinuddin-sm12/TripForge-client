import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/spot-info")
      .then((res) => res.json())
      .then((data) => {
        const filterData = data.filter((data) => data.email == user.email);
        setMyData(filterData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user.email]);
  // console.log(myData)

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        
        fetch(`http://localhost:5000/spot-info/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(async () => {
            const remaining = myData.filter((data) => data._id !== _id);
            setMyData(remaining);
            await window.location.reload();
          });
      }
    });
  };
  return (
    <div>
      <div className="overflow-x-auto max-w-[700px] h-[calc(100vh-499px)] mx-auto mt-14">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base ">My List :</tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myData.map((data) => (
              <tr key={data._id} className=" w-full">
                <td>
                  <div className="flex items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                      <div className="w-26 h-20 bg-sky-200 rounded-md overflow-hidden">
                        <img
                          className="object-cover object-centerw-full h-full"
                          src={data.img_url}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="font-bold">{data.spotName}</div>
                        <div className="text-sm opacity-50">
                          {data.countryName}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="btn btn-sm bg-[#00BA9C] text-white">
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(data._id)}
                        className="btn btn-sm bg-rose-500 text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyList;
