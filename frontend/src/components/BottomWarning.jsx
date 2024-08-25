import { Link } from "react-router-dom"
export default function BottomWarning({label,to,btmLink}){
    return <div className="py-2 text-sm flex justify-center">
    <div>
      {label}
    </div>
    <Link className="pointer underline pl-1 cursor-pointer" to={to}>
      {btmLink}
    </Link>
  </div>
}