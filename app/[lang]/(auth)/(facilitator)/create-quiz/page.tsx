import { withLinguiPage } from "@/app/hoc/useLingui";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ManageQuizPage = (_props: { params: Params }) => {
  return (
    <div>
      <p>Manage Quiz</p>
    </div>
  );
};

export default withLinguiPage(ManageQuizPage);
