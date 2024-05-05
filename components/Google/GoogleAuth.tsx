"use client";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const authHandler = async (cred: any) => {
    const decoded = jwtDecode(cred.credential);
    console.log(decoded);
  };

  return (
    <div className=" w-[300px] mx-auto">
      <GoogleLogin
        onSuccess={authHandler}
        onError={() => {
          console.log("Login Failed");
        }}
        theme="outline"
        text="signin_with"
        shape="rectangular"
        width={300}
      />
    </div>
  );
};

export default GoogleAuth;
