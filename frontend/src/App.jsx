import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import SendMoney from "./pages/SendMoney";
import Dashboard from "./pages/Dashboard";
import Me from "./pages/Me";
import Settings from "./components/Settings";
import Logout from "./components/Logout";
import ChangePass from "./components/ChangePass";
import ChangeEmail from "./components/ChangeEmail";
import Button from "./components/Button";
import ProtectRoutes from "./utils/ProtectedRoutes";
import Landing from "./pages/Landing";
import { SetPin } from "./pages/SetPIn";
import { AuthPin } from "./pages/AuthPin";
function App() {
  const token = localStorage.getItem("token");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route element={<ProtectRoutes />}>
            <Route path="/send" element={<SendMoney />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/me" element={<Me />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/changepass" element={<ChangePass />} />
            <Route path="/changeEmail" element={<ChangeEmail />} />
            <Route path="/setpin" element={<SetPin />}></Route>
            <Route path="/authPayment" element={<AuthPin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
