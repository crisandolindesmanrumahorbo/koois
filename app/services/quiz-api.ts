import { getToken } from "../utils/token";

export const QuizApi = {
  getQuizById: async (id: number) => {
    const token = await getToken();
    const response = await fetch(`http://127.0.0.1:8000/api/quiz/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store", // optional
    });
    return response.json();
  },
};
