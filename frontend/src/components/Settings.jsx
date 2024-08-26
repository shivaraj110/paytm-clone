import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Settings(){
    const nav = useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
    <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
            <div className="grid grid-cols-3">
                           <div className="mr-2" > PayTM </div>
        <div className="flex flex-col justify-center font-semibold h-full cursor-pointer ml-3" onClick={() => {
            nav('/logout')
        }}>
                  logout
        </div>
            </div>

        </div>
        </div>



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