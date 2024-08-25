import { useNavigate } from "react-router-dom"

export const Appbar = ({name , props}) => {
    
    const nav = useNavigate()
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center font-semibold h-full ml-4">
            PayTM App
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