import { useRecoilState } from "recoil"
import { currUserBalAtom } from "../atoms/currUserBal"
import { useEffect, useState } from "react"
import axios from "axios"
export function useBal(num){
    const token = localStorage.getItem("token")
    const [bal,setBal] = useRecoilState(currUserBalAtom)
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
              const interval =  setInterval(() => {
axios.get("http://localhost:3000/api/v1/account/balance",{
            headers:{
                Authorization : 'Bearer ' + token
            }
        }
    ).then(res=>{
        setBal(res.data.balance)
    }).finally(()=>{
       setLoading(false)
    })
    },num * 1000) 
    axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            Authorization : 'Bearer ' + token
        }
    }
).then(res=>{
    setBal(res.data.balance)
    { res.data.amt != undefined ? alert("recieved "+res.data.amt) : null}
    
}).finally(()=>{
   setLoading(false)
})
      return () => {
        clearInterval(interval)
    }
    },[token, num])
  
    return [bal , loading]
}