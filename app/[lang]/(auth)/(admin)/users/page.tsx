import { withLinguiPage } from "@/app/hoc/useLingui";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserPage = (_props: { params: Params }) => {
  return (
    <div>
      <p>Manages Users</p>
    </div>
  );
};

export default withLinguiPage(UserPage);
