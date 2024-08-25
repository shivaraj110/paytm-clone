import axios from "axios"
import { useEffect, useState } from "react"

export const Balance = () => {
    const[balance,setBalance] = useState(0)
    const token = localStorage.getItem("token")
    useEffect(()=>{
            axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization : 'Bearer ' + token
            }
        }
    ).then(res=>{
        setBalance(res.data.balance)
    })
    },[token])
    return <div className="flex">
        <div className="font-bold text-lg pl-3">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {balance}
        </div>
    </div>
}