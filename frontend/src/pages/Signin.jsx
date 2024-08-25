import { useEffect, useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signin() {
  const [username,setUsername]= useState("")
  const [password,setPass]= useState("")
  const nav = useNavigate()
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="felx flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"}/>
        <Subheading label={"enter your credentials to access your account"}/>
        <InputBox label={"Email"} placeholder={"example@gmail.com"} onChange={ e => {
          setUsername(e.target.value)
        }}/>
        <InputBox label={"Password"} placeholder={"123456"} onChange={ e => {
          setPass(e.target.value)
        }}/>
        <div className="pt-4" >
                            <Button label={"Sign in"} onClick={async () => {
                              const res = await axios.post("http://localhost:3000/api/v1/user/signin",{
                                username : username,
                                password : password
                              })
                              alert(res.data.msg)
                              nav("/dashboard?name="+res.data.fname)
                              localStorage.setItem("token",res.data.token)
                            }
                          }
                            />
                            </div>
                            <BottomWarning label={"Don't have an account?"} btmLink={"sign up"} to={'/signup'}/>
        </div>
      </div>
    </div>
  );
}
