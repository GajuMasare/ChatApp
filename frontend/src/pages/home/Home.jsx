import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-[600px] w-[1000px]  rounded-3xl">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
