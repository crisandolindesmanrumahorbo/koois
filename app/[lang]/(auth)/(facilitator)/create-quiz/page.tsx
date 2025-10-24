import FormulaEditor from "@/app/components/Quill/FormulaEditor";
import { withLinguiPage } from "@/app/hoc/useLingui";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ManageQuizPage = (_props: { params: Params }) => {
  return (
    <div className="flex-col gap-6">
      <p>Manage Quiz</p>
      <FormulaEditor />
    </div>
  );
};

export default withLinguiPage(ManageQuizPage);
