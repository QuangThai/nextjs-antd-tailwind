import React from "react";

// import NetWorth from "../MyAvatar/components/NetWorth";
import Campaign from "./components/Campaign";
import ExploreFriends from "./components/ExploreFriends";
import Following from "./components/Following";
import PopularAvatar from "./components/PopularAvatar";
import HeaderCard from "./utils/HeaderCard";

function MyNetWorkPage() {
  return (
    <>
      <HeaderCard title="My Network" desc="Welcome to My Network" />

      {/* <NetWorth /> */}

      {/* <Campaign /> */}

      <PopularAvatar />

      <ExploreFriends />

      <Following />
    </>
  );
}

export default MyNetWorkPage;
