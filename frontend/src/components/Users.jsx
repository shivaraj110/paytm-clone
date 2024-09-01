import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import useFilter from "../hooks/useFilter";
export const Users = () => {
  const [filter, setFilter] = useState("");
  const user = useFilter(filter, 0.5);
  return (
    <>
      <div className="my-2 pl-3 ml-32 slef-center mb-10 pr-3">
        <form class="form relative">
          <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
            <svg
              width="17"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              class=" h-5 text-gray-700">
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                stroke-width="1.333"
                stroke-linecap="round"
                stroke-linejoin="round"></path>
            </svg>
          </button>
          <input
            onChange={(e) => {
              setFilter(e.target.value);
            }}
            class="input rounded-full px-8 py-3 w-5/6 border-2 border-transparent ml- focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md"
            placeholder="Search..."
            required=""
            type="text"
          />
          <button
            type="reset"
            class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </form>
      </div>
      <div>
        {user.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const nav = useNavigate();

  return (
    <div className="flex ml-28 justify-between self-center ">
      <div className="flex ml-10 justify-center mt-6 ">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful ">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>

      </div>

      <div className="flex flex-col justify-center h-ful mr-52  pr-5">
        <button
          onClick={() => {
            nav("/send?id=" + user._id + "&username=" + user.firstName);
          }}
          class="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden  border-2 rounded-full group"
          type="submit">
          Send Money
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45">
            <path
              class="fill-gray-800 group-hover:fill-gray-800"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

{
  <Button label={"Send Money"} />;
}
