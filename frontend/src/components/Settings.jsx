import axios from "axios";
import { useNavigate } from "react-router-dom";
import SettingComp from "./SettingComp";

export default function Settings() {
  const nav = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="shadow-xl h-14 flex justify-between z-10 opacity-80 fixed top-0 left-0 right-0 bg-white">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
          <div className="grid grid-cols-3">
            <div className="mr-2"> PayTM </div>
            <div
              className="flex flex-col justify-center font-semibold h-full cursor-pointer ml-3"
              onClick={() => {
                nav("/logout");
              }}>
              logout
            </div>
          </div>
        </div>
      </div>
      <SettingComp />
    </div>
  );
}
