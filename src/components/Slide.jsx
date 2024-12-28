/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            {text}
          </h1>
          <br />
          <Link
            to="/add-job"
            className="px-5 py-4 font-semibold outline-none text-sm text-white  bg-cyan-700 rounded-lg"
          >
            Report Lost Or Found
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
