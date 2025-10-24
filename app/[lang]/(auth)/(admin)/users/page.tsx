import { withLinguiPage } from "@/app/hoc/useLingui";
import { UserApi } from "@/app/services/user-api";
import Users from "./components/Users";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserPage = async (_props: { params: Params }) => {
  const queryClient = new QueryClient();
  // clien side only
  // return <Users token={token} />;
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: async () => UserApi.getUsers(),
  });
  return (
    // only put this boundary when page have prefetch
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
};

export default withLinguiPage(UserPage);
