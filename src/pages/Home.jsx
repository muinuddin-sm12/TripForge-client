import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import OutTeam from "../components/OutTeam";
import Review from "../components/Review";
import TouristsSpot from "../components/TouristsSpot";
import Countries from "../components/Countries";
const Home = () => {
    const infoData = useLoaderData();
    return (
        <div>
            <Banner/>
            <TouristsSpot infoData={infoData}/>
            <Countries/>
            <OutTeam/>
            <Review/>
        </div>
    );
};

export default Home;