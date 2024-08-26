import { useNavigate } from "react-router-dom"

export const Appbar = ({name , props}) => {
    
    const nav = useNavigate()
    return <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
            <div className="grid grid-cols-3">
                           <div className="mr-3" > PayTM </div> <div className="flex flex-col justify-center font-semibold h-full cursor-pointer" onClick={() => {
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
   
        <div className="flex">
            <div className="flex flex-col justify-center h-full font-semibold mr-4">
                Hello {name}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl cursor-pointer" onClick={()=>{
                    nav('/me?email=' + props.email +"&lname=" + props.lname + "&fname=" + name)
                }}>
                    {name[0].toUpperCase()}
                </div>
            </div>
        </div>
    </div>
}