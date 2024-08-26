import { useBal } from "../hooks/useBal"
export const Balance = () => {
    const bal = useBal(6)
    return <div className="flex mt-20">
        <div className="font-bold text-lg pl-3">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
             {bal}.INR
            {}
        </div>
    </div>
}
