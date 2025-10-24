import { getTokenCookies } from "@/app/utils/cookies";

export const getToken = async () => {
  const isServer = typeof window === "undefined";
  let token;

  if (isServer) {
    token = await getTokenCookies();
  } else {
    token = localStorage.getItem("token");
  }
  return token;
};
