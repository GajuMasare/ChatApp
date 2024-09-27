import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConverstion from "../../Zustand/useConverstion";
import useGetConverstion from "../../hooks/useGetConverstion";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setsearch] = useState("");
  const { setSelectedConverstion } = useConverstion();
  const { conversations } = useGetConverstion();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Search term must be at least 3 characters long");

    const converastion = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLocaleLowerCase())
    );

    console.log(converastion);
    if (converastion) {
      setSelectedConverstion(converastion);
      setsearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form className="flex items-center " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input rounded-l-xl blackBgColor rounded-r-none text-sm w-full h-11"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-xl blackBgColor rounded-l-none border-none h-11 w-8 flex items-center  "
      >
        <IoSearchSharp className="w-3 h-3  outline-none " />
      </button>
    </form>
  );
};

export default SearchInput;
