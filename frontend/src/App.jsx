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
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/me" element={<Me />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/changepass" element={<ChangePass />} />
          <Route path="/changeEmail" element={<ChangeEmail />} />
        </Routes>
        <Landing />
      </BrowserRouter>
    </>
  );
}
function Landing() {
  const nav = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
          <div className="grid grid-cols-3">
            <div className="mr-2 mt-2"> PayTM </div>
            <div className="flex pl-8">
                          <div
              className="flex flex-col justify-center font-semibold h-full cursor-pointer "
              onClick={() => {
                nav("/signin");
              }}>
              <Button label={"sign in"} />
            </div>
            <div
              className="flex flex-col justify-center font-semibold h-full cursor-pointer px-3"
              onClick={() => {
                nav("/signup");
              }}>
              <Button label={'sign up'}/>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
