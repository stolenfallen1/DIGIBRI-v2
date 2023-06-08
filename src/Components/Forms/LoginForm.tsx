const LoginForm = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <form>
          <h3 className="font-bold text-2xl tracking-tighter">SIGN IN</h3>
          {/* Username */}
          <div>
            <div>
              <label>Username</label>
              <input type="text" placeholder="Username" />
            </div>
          </div>
          {/* Password */}
          <div>
            <div>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
