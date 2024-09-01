import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtom";
import { authFlag } from "../atoms/authFlag";
export default function Logout() {
  const nav = useNavigate();
  const setAuthFlag = useSetRecoilState(authFlag);
  const setUsers = useSetRecoilState(userAtom);
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
          <div className="grid grid-cols-3">
            <div className="mr-2"> PayTM </div>{" "}
            <div
              className="flex flex-col justify-center font-semibold h-full cursor-pointer"
              onClick={() => {
                nav("/settings");
              }}>
              settings
            </div>
          </div>
        </div>
      </div>
      <div className="felx flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <div className="text-slate-500 my-5">
            click logout again to logout or cancel to go back
          </div>
          <div className="grid grid-cols-2">
            <div className="px-1">
              <Button
                label={"logout"}
                onClick={() => {
                  localStorage.clear();
                  nav("/signin");
                  setAuthFlag((v) => (v = false));
                }}
              />
            </div>
            <div className="px-1">
              <Button
                label={"cancel"}
                onClick={() => {
                  nav("./");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
