import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Settings(){
    const nav = useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
    <div className="felx flex-col justify-center ">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <div className="text-gray-600 cursor-pointer mx-4" onClick={()=>{
                nav('/changepass')
            }}>
                change password
            </div>
            <div className="text-gray-600 cursor-pointer mx-4" onClick={()=>{
                nav('/changeEmail')
            }}>
                change email
            </div>
            </div>
        </div>
    </div>
}