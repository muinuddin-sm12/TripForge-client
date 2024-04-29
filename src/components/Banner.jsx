import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [text] = useTypewriter({
    words: ["TripForge", "TripForge", "TripForge"],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div className="max-w-[1536px] mx-auto px-4 md:px-10 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="slide slide4 h-[25vh] md:h-[40vh] lg:h-[60vh]">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto">
              Begin Your Next Adventure <br /> with {" "}
              <span className="text-black">{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4">
              At TripForge, we prioritize your travel experience and financial
              peace of mind with unwavering commitment. Explore confidently with
              TripForge, where your adventure begins with trust and prosperity.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn bg-[#00BA9C] border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide2 h-[25vh] md:h-[40vh] lg:h-[60vh]">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto">
              Begin Your Next Adventure <br /> with {" "}
              <span className="text-black">{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4">
              At TripForge, we prioritize your travel experience and financial
              peace of mind with unwavering commitment. Explore confidently with
              TripForge, where your adventure begins with trust and prosperity.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn bg-[#00BA9C] border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide3 h-[25vh] md:h-[40vh] lg:h-[60vh]">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto">
              Begin Your Next Adventure <br /> with {" "}
              <span className="text-black">{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4">
              At TripForge, we prioritize your travel experience and financial
              peace of mind with unwavering commitment. Explore confidently with
              TripForge, where your adventure begins with trust and prosperity.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn bg-[#00BA9C] border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide slide1 h-[25vh] md:h-[40vh] lg:h-[60vh]">
            <h1 className="text-white text-2xl lg:text-5xl font-semibold md:font-bold leading-6 md:leading-8 mb-3 md:mb-0 w-[90%] lg:w-[60%] mx-auto">
              Begin Your Next Adventure <br /> with {" "}
              <span className="text-black">{text}</span>
              <span>
                <Cursor cursorStyle="|" />
              </span>
            </h1>
            <p className="text-white hidden md:block w-[90%] lg:w-[60%] mx-auto text-sm md:text-base leading-5 py-2 md:py-4">
              At TripForge, we prioritize your travel experience and financial
              peace of mind with unwavering commitment. Explore confidently with
              TripForge, where your adventure begins with trust and prosperity.
            </p>
            <div className=" w-[90%] lg:w-[60%] mx-auto">
              <button className="btn bg-[#00BA9C] border-none text-white font-semibold text-lg">
                Expore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
