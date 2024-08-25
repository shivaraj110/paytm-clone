import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import { currUserBalAtom } from "../atoms/currUserBal"

export const Balance = () => {
    const token = localStorage.getItem("token")
    const [bal,setBal] = useRecoilState(currUserBalAtom)
    useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization : 'Bearer ' + token
            }
        }
    ).then(res=>{
        setBal(res.data.balance)
    })
    },[token])
    return <div className="flex">
        <div className="font-bold text-lg pl-3">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {bal}
            {}
        </div>
    </div>
}
