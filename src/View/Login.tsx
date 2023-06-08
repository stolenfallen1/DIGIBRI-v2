import { useState } from "react";
import LoginForm from "../Components/Forms/LoginForm";
import RegisterForm from "../Components/Forms/RegisterForm";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>
      {isLoginForm ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegisterForm toggleForm={toggleForm} />
      )}
    </div>
  );
};

export default Login;
