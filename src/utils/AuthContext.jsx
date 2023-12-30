/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";
import Loader from "../components/Loader";
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    checkStatus();
  }, []);
  const [user, setUser] = useState(null);

  const logInUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.createEmailSession(
        userInfo.email,
        userInfo.password
      );
      let accountDetails = account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log("error comes from logInUser", error);
    }
    setLoading(false);
  };
  const logOutUser = () => {
    account.deleteSession("current");
    setUser(null);
  };
  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      const response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      );
      await account.createEmailSession(userInfo.email, userInfo.password1);
      let accountDetails = account.get();
      setUser(accountDetails);
    } catch (error) {
      console.log("error comes from registerUser", error);
    }
    setLoading(false);
  };
  const checkStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails);
      console.log(accountDetails);
    } catch (error) {
      console.log("error comes from checkStatus", error);
    }
    setLoading(false);
  };
  const contextData = {
    user,
    logInUser,
    logOutUser,
    registerUser,
    checkStatus,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
export const UseAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContext;
