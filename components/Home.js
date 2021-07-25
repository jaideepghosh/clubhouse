import React from "react";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-react";
import GuestHome from "./Dashboard/Guest";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <GuestHome />
      </SignedOut>
    </>
  );
};

export default Home;
