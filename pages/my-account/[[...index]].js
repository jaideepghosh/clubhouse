import { UserProfile } from "@clerk/clerk-react";
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "../../components/Header";

export default function UserProfilePage() {
  return (
    <>
      <CssBaseline />
      <Header />
      <UserProfile path="/my-account" routing="path" />
    </>
  );
}
