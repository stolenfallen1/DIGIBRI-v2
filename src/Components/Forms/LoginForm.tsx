import WHITE_LOGO from "../../Assets/Logo/WHITE_LOGO.png";

interface LoginFormProps {
  toggleForm: () => void;
}

const LoginForm = ({ toggleForm }: LoginFormProps) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form className="border-2 border-black p-10 rounded">
          <div className="flex justify-center items-center">
            <img
              src={WHITE_LOGO}
              alt="WHITE_LOGO"
              style={{ width: "125px", height: "auto" }}
            />
          </div>
          <h3 className="mb-8 text-center font-bold text-4xl tracking-tighter">
            SIGN IN
          </h3>
          {/* Username */}
          <div className="flex justify-center items-center mb-2">
            <div className="flex justify-center items-center">
              <label className="text-xl pr-5 tracking-tight">Username:</label>
              <input
                className="text-lg border-b-2"
                type="text"
                placeholder="Username"
              />
            </div>
          </div>
          {/* Password */}
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center">
              <label className="text-xl pr-5 tracking-tight">Password:</label>
              <input
                className="text-lg border-b-2"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="text-center">
            <button className="px-4 py-1 mt-8 text-xl border-2 border-black rounded">
              Login
            </button>
          </div>
          <div className="text-center mt-4 cursor-pointer">
            <a className="px-4 py-1 text-lg text-blue-600" onClick={toggleForm}>
              No account yet? Register here
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
