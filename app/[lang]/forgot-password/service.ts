"use server";

export const forgotPassword = async (username: string) => {
  const body = JSON.stringify({
    username,
  });
  const response = await fetch(`${process.env.BASE_URL}/forgot-password`, {
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
