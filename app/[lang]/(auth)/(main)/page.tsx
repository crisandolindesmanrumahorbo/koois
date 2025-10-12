import { withLinguiPage } from "@/app/hoc/useLingui";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainPage = async (_props: { params: Params }) => {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default withLinguiPage(MainPage);
