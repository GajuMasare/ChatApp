import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[550px] md:h-[650px]  bg-red-400 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
