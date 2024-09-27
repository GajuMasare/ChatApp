import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="rounded-3xl p-7 flex flex-col grayBgColor md:min-w-[300px]">
      <SearchInput />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
