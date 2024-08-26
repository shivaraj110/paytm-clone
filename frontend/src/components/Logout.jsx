import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function Logout(){
    const nav = useNavigate()
    return <div className="bg-slate-300 h-screen flex justify-center items-center">
    <div className="felx flex-col justify-center ">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <div className="text-slate-500 my-5">
                click logout again to logout or cancel to go back
            </div>
            <div className="grid grid-cols-2">
                <div className="px-1">
                <Button label={"logout"} onClick={()=>{
                    localStorage.clear()
                    nav('/signin')
                }}/>
                </div>
                <div className="px-1">
                <Button label={"cancel"} onClick={()=>{
                    nav('./')
                }}/>
                </div>
            </div>
            </div>
        </div>
    </div>
}