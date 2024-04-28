import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import FadeLoader from "react-spinners/FadeLoader";

const SpotDetails = () => {
    const {id} = useParams()
    console.log(id)
    const [spot, setSpot] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/spot-info')
        .then(res => res.json())
        .then(data => {
            const findSpot = data.find(item => item._id == id)
            setSpot(findSpot)
            console.log(data._id)
        })
    },[id])
    console.log(spot)
    // if (!spot) {
    //     return (
    //       <div className="flex justify-center items-center h-[calc(100vh-126px)]">
    //         <FadeLoader color="#38BDF8" />
    //       </div>
    //     );
    //   }
    return (
        <div>
            Spot details
        </div>
    );
};

export default SpotDetails;