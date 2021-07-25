import React from "react";
import { useUser } from "@clerk/clerk-react";

const GuestHome = () => {
  const { firstName } = useUser();
  return <>Welcome {firstName}</>;
};

export default GuestHome;
