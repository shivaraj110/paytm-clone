import { useState } from "react"
import Button from "./Button"
import axios from "axios"
export default function changepass(){
    const [pass,setPass] = useState("")
    const [newPass,setNewPass] = useState("")
    const [verPass,setVerPass] = useState("")
    const PutPass =  async (newPass) => { 
                const res = await axios.put("http://localhost:3000/api/v1/user/",{
                                password: newPass
            }, {
                headers :{
                    Authorization : 'Bearer ' + localStorage.getItem("token")
                }
            }
        )
    alert(res.data.msg)
    }
   return <div className="bg-slate-300 h-screen flex justify-center items-center  ">
   <div className="felx flex-col justify-center my-5 ">
         <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 ">
            <div className="p-2">
<input type="text" placeholder="Enter current password" onChange={e => {
            setPass(e.target.value)
        }} className="border rounded p-1 border-slate-700 "/>
            </div>
            <div className="p-2">
<input type="text" placeholder="Enter new password" onChange={e => {
            setNewPass(e.target.value)
        }}  className="border rounded p-1 border-slate-700 "/>
            </div>
            <div className="p-2">
 <input type="text" placeholder="Confirm the new password" onChange={ e => {
            setVerPass(e.target.value)
        }}  className="border rounded p-1 border-slate-700 "/>
            </div>
        <div className="flex">
        <Button label={"change password"} onClick={
            ()=>{
                {pass !== "" & newPass !== "" & verPass !== "" ? PutPass(newPass) : alert("invalid attempt")}
            }
    }/>
        </div>
    </div>
    </div>
    </div>
}