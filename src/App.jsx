import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import Header from "./components/Header";
function App() {
  return (
    <div className="bg-bgColor min-h-screen">
      <Header />
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
