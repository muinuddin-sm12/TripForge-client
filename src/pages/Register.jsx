import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/login";

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const notify = () => toast.success("Registered Successfully!");
    const {userRegister, updateUserProfile, logOut} = useContext(AuthContext);

    const handleRegister = async (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const url = e.target.url.value;
      const password = e.target.password.value;
  
      if (password.length < 6) {
        setError("Password must be at least 6 Character!");
        return;
      } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
        setError("Password must have an Uppercase letter!");
        return;
      } else if (!/^(?=.*[a-z]).+$/.test(password)) {
        setError("Password must have an Lowercase letter");
        return;
      }
      setError("");
  
      try {
        await userRegister(email, password);
        notify();
        await updateUserProfile(name, url);
        navigate(from);
        await logOut();
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
        <div
      data-aos="zoom-in"
      className="h-[calc(100vh-308px)] flex justify-center items-center"
    >
      <div className="hero">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
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
            {error && <small className="text-red-600">{error}</small>}
            <div className="flex items-center gap-1 pb-3">
              Already have account?{" "}
              <p className="font-semibold">
                <Link to="/login">Login</Link>
              </p>
            </div>
            <input
              type="submit"
              className="btn bg-[#00BA9C] text-white text-base"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;