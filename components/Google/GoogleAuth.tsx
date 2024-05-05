"use client";

import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const authHandler = async (cred: any) => {
    const decoded = jwtDecode<{ email: string; name?: string }>(
      cred.credential
    );

    const data = {
      email: decoded.email,
      name: decoded.name,
    };
    const user = await fetch("api/auth/oAuth", {
      method: "POST",
      body: JSON.stringify(data),
    });

    console.log("USER from Oauth", await user.json());
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
