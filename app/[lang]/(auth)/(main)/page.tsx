import { withLinguiPage } from "@/app/hoc/useLingui";
import Main from "./components/Main";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainPage = (_props: { params: Params }) => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default withLinguiPage(MainPage);
