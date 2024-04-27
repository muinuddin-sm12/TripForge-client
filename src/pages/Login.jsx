import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  
  const successNotify = () => toast.success("Login Successfully!");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const {userLogin, googleLogin, twitterLogin} = useContext(AuthContext)
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await userLogin(email, password);
    navigate(from);
  };
  const handleSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        successNotify();
        navigate(from);
      }
    });
  };
  return (
    <div
      data-aos="zoom-in"
      className="h-[calc(100vh-308px)] flex justify-center items-center "
    >
      <div className="hero">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
            <div className="flex relative">
              <input
                // type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              <span
                // onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-2xl"
              >
                {/* {showPassword ? <IoMdEye /> : <IoMdEyeOff />} */}
              </span>
            </div>
            <div className="flex items-center gap-1 py-3">
              Do not have any account?{" "}
              <p className="font-semibold">
                <Link to="/register">Register</Link>
              </p>
            </div>

            <input
              className="btn bg-[#00BA9C] text-white text-base"
              type="submit"
              value="Login"
            />

            <div className="flex items-center py-3 gap-5">
              <h3 className="font-medium">Or login with,</h3>
              <button className="btn hover:bg-white"><img onClick={() => handleSocialLogin(googleLogin)} className="h-6 cursor-pointer" src="/src/assets/images/google (1).png" alt="" /></button>
              <button className="btn hover:bg-white"><img onClick={() => handleSocialLogin(twitterLogin)} className="h-6 cursor-pointer" src="/src/assets/images/twitter.png" alt="" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
