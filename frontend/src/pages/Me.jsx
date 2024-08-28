import { useNavigate, useSearchParams } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { currUserBalAtom } from "../atoms/currUserBal"
export default function Me(){
    const [searchParams] = useSearchParams()
    const fname = searchParams.get('fname')
    const email = searchParams.get("email")
    const lname = searchParams.get("lname")
    const balance = useRecoilValue(currUserBalAtom)
    const nav = useNavigate()
    return  <div className="bg-slate-300 h-screen flex justify-center items-center">
            <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
            <div className="flex flex-col justify-center font-semibold h-full ml-4">
                <div className="grid grid-cols-3">
                            <div className="mr-2" > PayTM </div> <div className="flex flex-col justify-center font-semibold h-full cursor-pointer" onClick={() => {
                nav('/settings')
            }}>
                    settings
            </div>
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
      <div className="rounded-full h-16 w-16 bg-slate-200 flex justify-center mt-5 mx-auto self-center">
                <div className="flex flex-col justify-center h-full text-xl cursor-pointer ">
                    {fname[0].toUpperCase()}
                </div>
            </div>
            <div className="text-slate-600 text-md pt-1 px-4 pb-4" >
                {fname} {lname}
                <br />
                <div className="cursor-pointer">
                    {email} 
                </div>
                
            </div>
            <div className="text-slate-600 flex text-md justify-end pt-1 px-4 pb-4" >
                {balance} <div>
                   {'.INR'}
                </div>
            </div>  
            
    </div>
</div>
</div>
}