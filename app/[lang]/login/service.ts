"use server";

interface ISignGoogleResponse {
  token: string;
  is_registered: boolean;
}

export const login = async (username: string, password: string) => {
  const body = JSON.stringify({
    username,
    password,
  });
  const response = await fetch(`${process.env.BASE_URL}/login`, {
    method: "POST",
    body,
  });
  if (response.status >= 200 && response.status < 300) {
    const data = await response.json();
    return { data, error: null };
  }
  if (response.status >= 400 && response.status < 500) {
    return { data: null, error: "credential is wrong" };
  }
  return { data: null, error: "server have problem," };
};

export const sign_google = async (token: string) => {
  const body = JSON.stringify({
    token,
  });
  const response = await fetch(`${process.env.BASE_URL}/signin-google`, {
    method: "POST",
    body,
  });
  if (response.status >= 200 && response.status < 300) {
    const data = (await response.json()) as ISignGoogleResponse;
    console.log("signin-google ", data);
    return { data, error: null };
  }
  if (response.status >= 400 && response.status < 500) {
    return { data: null, error: "credential is wrong" };
  }
  return { data: null, error: "server have problem," };
};
