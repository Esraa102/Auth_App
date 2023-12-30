import { Link } from "react-router-dom";
import { UseAuthContext } from "../utils/AuthContext";

const Header = () => {
  const { user, logOutUser } = UseAuthContext();

  return (
    <div className="bg-secondaryBgColor text-white sticky top-0 p-4">
      {user ? (
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-2xl font-bold text-mainColor">
            LOGO
          </Link>
          <div className="flex gap-4 items-center">
            <ul className="flex gap-4 text-xl font-semibold">
              <Link to="/" className="hover:text-mainColor transition">
                Home
              </Link>
              <Link to={"/profile"} className="hover:text-mainColor transition">
                Profile
              </Link>
            </ul>
            <button type="button" className="btn" onClick={logOutUser}>
              Log Out
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="cursor-pointer text-2xl font-bold text-mainColor">
            LOGO
          </p>
          <Link className="btn" to="/login">
            Log In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
