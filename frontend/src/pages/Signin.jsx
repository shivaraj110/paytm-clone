import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { authFlag } from "../atoms/authFlag";
import { curruserAtom } from "../atoms/userAtom";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");
  const nav = useNavigate();
  const setAuthFlag = useSetRecoilState(authFlag);
  const setCurrUser = useSetRecoilState(curruserAtom);
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center ">
      <div className="felx flex-col justify-center shadow-md hover:shadow-2xl ">
        <div className="rounded-xl bg-white w-80 shadow-md hover:shadow-2xl text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <Subheading label={"enter your credentials to access your account"} />
          <InputBox
            label={"Email"}
            placeholder={"example@gmail.com"}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <div>
            <div className=" flex font-semibold  pb-2 pt-1 justify-start">
              {"Password"}
            </div>
            <input
              type="password"
              placeholder={"123456"}
              className="w-full px-2 py-1 pb-1 border rounded border-slate-200"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>

          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={async () => {
                const res = await axios.post(
                  "http://localhost:3000/api/v1/user/signin",
                  {
                    username: username,
                    password: password,
                  }
                );
                alert(res.data.msg);
                nav("/dashboard");
                setCurrUser(
                  (u) =>
                    (u = {
                      fname: res.data.fname,
                      lname: res.data.lname,
                      email: username,
                      pass:password
                    })
                );
                localStorage.setItem("token", res.data.token);
                setAuthFlag((v) => (v = true));
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            btmLink={"sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
}
