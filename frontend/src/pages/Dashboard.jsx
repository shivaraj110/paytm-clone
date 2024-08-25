import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard(){
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
        return(
            <div>
                <Appbar name={name}/>
                <Balance/>
                <Users/>
            </div>
        )
}