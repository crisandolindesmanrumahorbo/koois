import { withLinguiPage } from "@/app/hoc/useLingui";
import Quiz from "../components/Quiz";
import { QuizApi } from "@/app/services/quiz-api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const QuizPage = async (_props: { params: Params }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["quiz_id"],
    queryFn: async () => QuizApi.getQuizById(3),
  });

  return (
    <div className="flex flex-col gap-6">
      <p>Quiz</p>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Quiz />
      </HydrationBoundary>
    </div>
  );
};

export default withLinguiPage(QuizPage);
