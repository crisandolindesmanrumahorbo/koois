import { API_CORE } from "../constants/api-url";
import { getToken } from "../utils/token";

export const QuizApi = {
  getQuizById: async (id: number) => {
    const token = await getToken();
    const response = await fetch(`${API_CORE}/api/quiz/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store", // optional
    });
    return response.json();
  },
};
