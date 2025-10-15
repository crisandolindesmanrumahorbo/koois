"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { sign_google } from "../service";
import { initCookies } from "@/app/utils/cookies";
import { useRouter } from "next/navigation";

interface IProps {
  clientId: string;
}

export default function GoogleSignIn({ clientId }: IProps) {
  const router = useRouter();
  function parseJwt(token: string) {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  const onSuccess = async (credential: string) => {
    if (!credential) {
      return;
    }
    const { data, error } = await sign_google(credential);
    if (error) {
      console.log(error);
      return;
    }
    if (data?.is_registered) {
      await initCookies({ token: data.token });
      router.push("/");
      return;
    }
    router.push("/register");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        theme="filled_blue"
        text="continue_with"
        logo_alignment="left"
        shape="square"
        onSuccess={async (credentialResponse) => {
          console.log(credentialResponse);
          console.log(parseJwt(credentialResponse.credential ?? ""));
          await onSuccess(credentialResponse.credential ?? "");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}
