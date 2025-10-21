import { withLinguiPage } from "@/app/hoc/useLingui";
import { UserApi } from "@/app/services/user-api";
import Users from "./components/Users";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { getTokenCookies } from "@/app/utils/cookies";

type Params = Promise<{ lang: string; symbol: string }>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const UserPage = async (_props: { params: Params }) => {
  const queryClient = new QueryClient();
  const token = await getTokenCookies();
  // return <Users token={token} />;
  console.log("Server token:", token);

  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: async () => UserApi.getUsers(token),
  });
  const dehydratedState = dehydrate(queryClient);
  console.log("Server dehydrated:", dehydratedState);
  return (
    // only put this boundary when page have prefetch
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense>
        <Users token={token} />
      </Suspense>
    </HydrationBoundary>
  );
};

export default withLinguiPage(UserPage);
