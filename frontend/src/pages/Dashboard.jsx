import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export default function Dashboard() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const lname = searchParams.get("lname");
  const name = searchParams.get("name");
  const props = {
    email: email,
    lname: lname,
  };
  return (
    <div>
      <Appbar name={name} props={props} />
      <Balance />
      <Users />
    </div>
  );
}
