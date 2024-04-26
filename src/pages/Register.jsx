import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div
      data-aos="zoom-in"
      className="h-[calc(100vh-308px)] flex justify-center items-center"
    >
      <div className="hero">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form  className="card-body">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="url"
              placeholder="PhotoURL"
              className="input input-bordered"
              required
            />
            <div className="flex relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-2xl"
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </span>
            </div>
            {/* {error && <small className="text-red-600">{error}</small>} */}
            <div className="flex items-center gap-1 pb-3">
              Already have account?{" "}
              <p className="font-semibold">
                <Link to="/login">Login</Link>
              </p>
            </div>
            {/* <button className="btn btn-primary">Register</button> */}
            <input
              type="submit"
              className="btn bg-sky-400 text-white text-base"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;