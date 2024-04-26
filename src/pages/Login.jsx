import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      data-aos="zoom-in"
      className="h-[calc(100vh-308px)] flex justify-center items-center "
    >
      <div className="hero">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
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
              className="btn bg-sky-400 text-white text-base"
              type="submit"
              value="Login"
            />

            <div className="flex items-center py-3 gap-3">
              <h3 className="font-medium">Or login with,</h3>
              <button
                // onClick={() => handleSocialLogin(googleLogin)}
                className="btn btn-link btn-sm bg-black text-sky-400"
              >
                Google
              </button>
              <button
                // onClick={() => handleSocialLogin(githubLogin)}
                className="btn  btn-link btn-sm bg-black text-sky-400"
              >
                Github
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
