import { useNavigate } from "react-router-dom";

export const Appbar = ({ name, props }) => {
  const nav = useNavigate();
  return (
    <div className="shadow h-14 flex justify-between fixed top-0 left-0 right-0 bg-white">
      <div className="flex flex-col justify-center font-semibold h-full ml-4">
        <div className="grid grid-cols-3">
          <div className="mr-3"> PayTM </div>{" "}
          <div
            className="flex flex-col justify-center font-semibold ml-6 h-full cursor-pointer"
            onClick={() => {
              nav("/settings");
            }}>
            <svg
              className="lucide lucide-settings"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth={2}
              stroke="#7e8590"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle r="3" cy="12" cx="12" />
            </svg>
          </div>
          <div
            className="flex flex-col justify-center font-semibold h-full cursor-pointer ml-3"
            onClick={() => {
              nav("/logout");
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
          <div
            className="flex flex-col justify-center h-full text-xl cursor-pointer"
            onClick={() => {
              nav(
                "/me?email=" +
                  props.email +
                  "&lname=" +
                  props.lname +
                  "&fname=" +
                  name
              );
            }}>
            {name[0].toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
