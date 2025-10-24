import { useSuspenseQuery } from "@tanstack/react-query";

import { QuizApi } from "../quiz-api";

export type QuestionType = "multiple_choice" | "open_ended";

export interface IQOption {
  id: number;
  text: string;
  image_url: string | null;
  is_correct: boolean;
  order: number | null;
}

export interface IGetQuiz {
  id: number;
  text: string;
  type: QuestionType;
  image_url: string | null;
  options: IQOption[] | null;
}

const useGetQuiz = (id: number) => {
  const {
    data = { data: [] },
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useSuspenseQuery({
    queryKey: ["quiz_id"],
    queryFn: async () => QuizApi.getQuizById(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const questions = (data || []) as Array<IGetQuiz>;

  return {
    questions,
    isLoading,
    isFetching,
    refetch,
    isError,
  };
};

export default useGetQuiz;
