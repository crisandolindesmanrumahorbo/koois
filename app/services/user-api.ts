export const UserApi = {
  getUsers: async (tokenProps?: string) => {
    const isServer = typeof window === "undefined";
    let token;

    if (isServer && tokenProps) {
      token = tokenProps;
      console.log("server ", token);
    } else {
      token = localStorage.getItem("token");
      console.log("client ", token);
    }
    console.log({ token });
    const response = await fetch(`http://localhost:7879/protected/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // optional
    });
    return response.json();
  },
};
