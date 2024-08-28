import { useState } from "react"
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useFilter from "../hooks/useFilter";
export const Users = () => {
    const [filter,setFilter] = useState("")
    const user = useFilter(filter,0.5)
    return <>
        <div className="font-bold mt-6 text-lg pl-3">
            Users
        </div>
        <div className="my-2 pl-3 pr-3">
            <input type="text" placeholder="Enter name" className="w-full px-2 py-1 border rounded border-slate-200 " onChange= { (e) => {
                setFilter(e.target.value)
            }}></input>
        </div>
        <div>
            {user.map(user => <User user={user} />)}
        </div>
    </>
}

function User({user}) {
    const nav = useNavigate()

    return <div className="flex justify-between">
        <div className="flex pl-3">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful ">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful pr-5">
            <Button label={"Send Money"} onClick={() => {
                nav("/send?id=" + user._id + "&username=" + user.firstName)
            }}/>
        </div>
    </div>
}