const RegisterForm = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <form>
          <h3 className="font-bold text-2xl tracking-tighter">SIGN UP</h3>
          {/* School ID */}
          <div>
            <div>
              <label>School ID</label>
              <input type="text" placeholder="ID #" />
            </div>
          </div>
          {/* Email */}
          <div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
          </div>
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
            <button>Register</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
