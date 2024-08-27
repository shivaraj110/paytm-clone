import { useBal } from "../hooks/useBal"
export const Balance = () => {
    const value = useBal(6)
    return <div className="flex mt-20">
        <div className="font-bold text-lg pl-3">
            Your balance
        </div>

            {!value.loading ?        <div className="font-semibold ml-4 text-lg">
             {value.bal}.INR
             </div> : <div className="font-semibold ml-4 text-lg">loading...</div> }
    </div>
}
