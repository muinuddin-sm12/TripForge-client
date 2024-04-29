import { Bounce } from "react-awesome-reveal";
import ReviewSlide from "./ReviewSlide";

const Review = () => {
  return (
    <div className="w-full py-10">
      <Bounce>
        <h1 className="text-2xl font-bold leading-none text-center sm:text-4xl text-gray-800 mb-12">
          Reviews
        </h1>
      </Bounce>
      <ReviewSlide />
    </div>
  );
};

export default Review;
