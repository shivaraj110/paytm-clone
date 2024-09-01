import { useState } from "react";
import Button from "./Button";
import axios from "axios";
import Change from "./Change";
export default function ChangeEmail() {
  const [email, setEmail] = useState("");
  const putEmail = async (newEmail) => {
    const res = await axios.put(
      "http://localhost:3000/api/v1/user/",
      {
        username: newEmail,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    alert(res.data.msg);
  };
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="felx flex-col justify-center ">
        <div className="rounded-lg bg-white w-80 text-center  shadow-md hover:shadow-2xl p-6 h-max px-4">
          <div className="flex justify-center text-center ">
            <input
              type="text"
              placeholder="enter new email"
              className="border  text-center font-medium rounded-lg text-sm p-6 me-2 mb-2 w- h-8 border-gray-700"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            className="flex justify-center my-2"
            onClick={() => {
              {
                email ? putEmail(email) : alert("email field is empty!");
              }
            }}>
            <Change label={"Change Email"} />
          </div>
        </div>
      </div>
    </div>
  );
}
