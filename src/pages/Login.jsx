import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseAuthContext } from "../utils/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { logInUser, user } = UseAuthContext();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const loginForm = useRef(null);
  const [emailErr, setEmailErr] = useState(false);

  const validEmail = () => {
    const email = loginForm?.current?.email?.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email) {
      if (email.match(emailRegex)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = validEmail()
      ? loginForm.current.email.value
      : setEmailErr(true);
    const password = loginForm.current.pass.value;

    if (email && password) {
      logInUser({ email, password });
    }
  };

  return (
    <div className="px-4 py-10 text-white">
      <h2 className="header">Log In</h2>
      <form ref={loginForm} onSubmit={handleSubmit} className="form">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          required
          placeholder="Enter Email"
          className="input"
        />
        {emailErr && <span className="err">Wrong Input Eamil</span>}
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          required
          placeholder="Enter password"
          className="input"
        />

        <button type="submit" className="btn">
          LogIn
        </button>
        <p>
          Don&apos;t Have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-mainColor hover:underline"
          >
            Sing In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
