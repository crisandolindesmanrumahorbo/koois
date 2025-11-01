import { withLinguiPage } from "@/app/hoc/useLingui";
import AdminDashboard from "../(admin)/components/AdminDashboard";
import LearnerDashboard from "../(learner)/components/LearnerDashboard";
import FacilitatorDashboard from "../(facilitator)/components/FacilitatorDashboard";
import { getUser } from "@/app/utils/cookies";

type Params = Promise<{ lang: string; symbol: string }>;

const DASBOARDS: { [key: number]: React.ReactNode } = {
  1: <AdminDashboard />,
  2: <FacilitatorDashboard />,
  3: <LearnerDashboard />,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MainPage = async (_props: { params: Params }) => {
  const user_cookies = await getUser();
  return <div>{DASBOARDS[user_cookies.role_id]}</div>;
};

export default withLinguiPage(MainPage);
