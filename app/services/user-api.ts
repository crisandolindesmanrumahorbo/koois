import { API_AUTH } from "../constants/api-url";
import { getToken } from "../utils/token";

export const UserApi = {
  getUsers: async () => {
    const token = await getToken();
    const response = await fetch(`${API_AUTH}/protected/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // optional
    });
    return response.json();
  },
};
