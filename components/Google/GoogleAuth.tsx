"use client";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const authHandler = async (cred: any) => {
    const decoded = jwtDecode(cred.credential);
    console.log(decoded);
  };

  return (
    <GoogleLogin
      onSuccess={authHandler}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleAuth;
