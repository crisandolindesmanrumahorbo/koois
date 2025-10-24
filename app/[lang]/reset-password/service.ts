"use server";

export const resetPassword = async (token: string, password: string) => {
  const body = JSON.stringify({
    token,
    password,
  });
  const response = await fetch(`${process.env.BASE_URL}/reset-password`, {
    method: "POST",
    body,
  });
  if (response.status >= 200 && response.status < 300) {
    return { data: null, error: null };
  }
  if (response.status >= 400 && response.status < 500) {
    return { data: null, error: "credential is wrong" };
  }
  return { data: null, error: "server have problem," };
};
