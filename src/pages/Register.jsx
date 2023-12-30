import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { UseAuthContext } from "../utils/AuthContext";
const Register = () => {
  const registerFormRef = useRef(null);
  const { registerUser, user } = UseAuthContext();
  const navigate = useNavigate();
  const [confirmErr, setConfirmErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  const validEmail = () => {
    const email = registerFormRef?.current?.email?.value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email) {
      if (email.match(emailRegex)) {
        return true;
      } else {
        return false;
      }
    }
  };
  const validPassword = () => {
    const password = registerFormRef.current.pass.value;
    if (password.length >= 8) {
      return true;
    } else {
      setPassErr(true);
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = registerFormRef.current.username.value;
    const email = validEmail()
      ? registerFormRef.current.email.value
      : setEmailErr(true);
    console.log(email);
    const password1 =
      validPassword() ||
      registerFormRef.current.pass.value ===
        registerFormRef.current.confirm.value
        ? registerFormRef.current.pass.value
        : setConfirmErr(true);
    if (name && email && password1) {
      registerUser({ name, email, password1 });
    }
  };
  return (
    <div className="px-4 py-10 text-white">
      <h2 className="header">Sign In</h2>
      <form ref={registerFormRef} onSubmit={handleSubmit} className="form">
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          required
          placeholder="Enter Username"
          className="input"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          required
          placeholder="enter Email"
          className="input"
        />
        {emailErr && <span className="err">Email Is Invalid</span>}
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          required
          placeholder="enter password"
          className="input"
        />
        {passErr && (
          <span className="err">Password Should be at least 8 chars</span>
        )}
        <div className="flex flex-col gap-4">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            id="confirm"
            type="password"
            required
            placeholder="enter password again.."
            className="input"
          />
          {confirmErr && (
            <span className="err">Re-Password Does not match password</span>
          )}
        </div>
        <button type="submit" className="btn">
          Sing In
        </button>
        <p>
          Already Have an account?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-mainColor hover:underline"
          >
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
