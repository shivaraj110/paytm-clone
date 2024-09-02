import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useRecoilValue } from "recoil";
import { curruserAtom } from "../atoms/userAtom";

export default function Dashboard() {
  const currUser = useRecoilValue(curruserAtom);
  const email = currUser.email;
  const lname = currUser.lname;
  const name = currUser.fname;
  const props = {
    email: email,
    lname: lname,
  };
  return (
    <div>
      <Appbar name={name} props={props} />
      <Balance />
      <Users
        props={{
          name,
          lname,
          email,
        }}
      />
    </div>
  );
}
